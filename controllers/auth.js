const User = require("../models").User; //Importar el modelo
module.exports = {
  signin: function(req,res){
    res.render('auth/signin');
  },
  login: function(req,res){
    User.login(req.body.email,req.body.password).then(function(result){
      res.json(result);
    }).catch(function(err){
      console.log(err);
      res.json(err);
    });
  }
};
