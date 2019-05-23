const Task = require("../models").Task; //Importar el modelo
const paginate = require('express-paginate');

module.exports = {
  index: async function(req,res, next){
    Task.findAndCountAll({limit: req.query.limit, offset: req.skip})
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
    Task.findByPk(req.params.id).then(task => {
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
      Task.create({description: req.body.description}).then(result =>{
        res.redirect('/tasks/');
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });
  },
  update: function(req,res){
      Task.update({description: req.body.description},{where:{
        id:req.params.id
      }}).then(result =>{
        res.redirect('/tasks/'+req.params.id);
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });
  },
  destroy: function(req,res){
    Task.destroy({where:{id:req.params.id}}).then(result => {
        res.redirect('/tasks/');
    });
  }
};
