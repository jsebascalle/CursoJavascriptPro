const Task = require("../models").Task; //Importar el modelo
const paginate = require('express-paginate');

module.exports = {
  index: async function(req,res, next){
    Task.findAndCountAll({include:['user','categories'],where:{userId:req.user.id},limit: req.query.limit, offset: req.skip})
        .then(results => {
            const itemCount = results.count;
            const pageCount = Math.ceil(results.count / req.query.limit);
            res.render('tasks/index', {
              tasks: results.rows,
              pageCount,
              itemCount,
              pageActive: req.query.page,
              pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
            });
        }).catch(err => next(err));
  },
  show: function(req,res){
    Task.findByPk(req.params.id,{include:['user','categories']}).then(task => {
        res.render('tasks/show',{task});
    });

  },
  create: function(req,res){
      res.render('tasks/create');
  },
  edit: function(req,res){
    Task.findByPk(req.params.id).then(task => {
        res.render('tasks/edit',{task});
    });
  },
  store: function(req,res){
      Task.create({
        description: req.body.description,
        userId : req.user.id
      }).then(task =>{
        //despues que retorna el  objeto creado puedo usar addCategories
        let categoryIds = req.body.categories.split(",");
        task.addCategories(categoryIds).then(()=>{
            res.redirect('/app/tasks/');
        });
      });
  },
  update: function(req,res){
     //Busca la tarea , actualiza descripción y guarda, y con el objeto retornado por la promesa uso addCategories
      let task = Task.findByPk(req.params.id).then(task => {
          task.description = req.body.description;
          task.save().then(()=>{
            let categoryIds = req.body.categories.split(",");
            task.addCategories(categoryIds).then(()=>{
                res.redirect('/app/tasks/'+req.params.id);
            });
          });
      });
  },
  destroy: function(req,res){
    Task.destroy({where:{id:req.params.id}}).then(result => {
        res.redirect('/app/tasks/');
    });
  }
};
