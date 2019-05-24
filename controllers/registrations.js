const User = require("../models").User; //Importar el modelo
module.exports = {
  create: function(req,res){
    res.render('registrations/create');
  },
  store: function(req,res){
      User.create({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
        }).then(result =>{
        res.redirect('/signup/');
      }).catch(err =>{
        console.log(err);
        res.json(err)
      });
  }
};
