const User = require("../models").User; //Importar el modelo
module.exports = {
  signin: function(req,res){
    res.render('auth/signin');
  },
  login: function(req,res){
    User.login(req.body.email,req.body.password)
    .then(user=>{
      if(user){
        req.session.userId = user.id;
        res.redirect("/app/dashboard");
      }else{
        res.json(user);
      }
    })
    .catch(function(err){
      console.log(err);
      res.json(err);
    });
  },
  logout: function(req, res) {
      if (req.session.userId) {
        req.session.destroy(function(){
            res.redirect('/') ;
        });
      }
  }
};
