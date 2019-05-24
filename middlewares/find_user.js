const User = require("../models").User; //Importar el modelo
module.exports = function(req,res,next){
  if(!req.session.userId) next();

  User.findByPk(req.session.userId).then(user => {
     if (user) {
       req.user = user;
       next();
     }
  }).catch(function(err){

  });
};
