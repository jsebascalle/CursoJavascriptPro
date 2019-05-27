const User = require("../models").User; //Importar el modelo
const socket = require("../realtime/client");
module.exports = function(req,res,next){

  if (!req.session.userId) {
    //aqui debiria eliminar el socket del usuario si no esta logueado

		res.redirect("/");
	}else{

    User.findByPk(req.session.userId).then(user => {
       if (user) {
         req.user = user;
         next();
       }
    }).catch(function(err){
      console.log(err);
      res.redirect("/");
    });

	}
};
