const User = require("../models").User; //Importar el modelo
const paginate = require('express-paginate');

module.exports = {
  index: async function(req,res, next){
    User.findAndCountAll({limit: req.query.limit, offset: req.skip})
        .then(results => {
            const itemCount = results.count;
            const pageCount = Math.ceil(results.count / req.query.limit);
            res.render('users/index', {
              users: results.rows,
              pageCount,
              itemCount,
              pageActive: req.query.page,
              pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
            });
        }).catch(err => next(err));
  },
  show: function(req,res){
    User.findByPk(req.params.id).then(user => {
        res.render('users/show',{user});
    });
  },
  edit: function(req,res){
    User.findByPk(req.params.id).then(user => {
        res.render('users/edit',{user});
    });
  },
  update: function(req,res){
      /*User.update({description: req.body.description},{where:{
        id:req.params.id
      }}).then(result =>{
        res.redirect('/tasks/'+req.params.id);
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });*/
  },
  destroy: function(req,res){
    User.destroy({where:{id:req.params.id}}).then(result => {
        res.redirect('/users/');
    });
  }
};
