const Category = require("../models").Category; //Importar el modelo


module.exports = {
  create: function(req,res){
    res.render('categories/create');
  },
  index: function(req,res, next){
    Category.findAll().then(function(categories){
     res.render('categories/index',{categories});
    });
  },
  show: function(req,res){
    Category.findByPk(req.params.id).then(category => {
      res.render('categories/show',{category});
    });
  },
  edit: function(req,res){
    Category.findByPk(req.params.id).then(category => {
        res.render('categories/edit',{category});
    });
  },
  store: function(req,res){
      Category.create({
        title: req.body.title,
        color: req.body.color
        }).then(result =>{
        res.redirect('/app/category/');
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });
  },
  update: function(req,res){
      Category.update({title: req.body.title,color:req.body.color},{where:{
        id:req.params.id
      }}).then(result =>{
        res.redirect('/app/category/'+req.params.id+'/edit');
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });
  },
  destroy: function(req,res){
    Category.destroy({where:{id:req.params.id}}).then(result => {
        res.json(result);
    });
  }
};
