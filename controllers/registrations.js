const User = require("../models").User; //Importar el modelo
const paginate = require('express-paginate');


module.exports = {
  register: function(req,res){
    res.render('registrations/new');
  },
  store: function(req,res){
      /*Task.create({description: req.body.description}).then(result =>{
        res.redirect('/tasks/');
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });*/
  }
};
