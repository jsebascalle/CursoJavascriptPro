'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
     type:DataTypes.STRING,
     allowNull:false,
     validate:{
       notNull: true
     }
    },
    lastName: {
      type :DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail :true,
        notNull: true
      }
    },
    password: {
      allowNull:false,
      type : DataTypes.VIRTUAL,
      validate:{
        notNull: true,
        len: [8,10],
        isEqualsConfirm(value) {
          if (value !== this.password_confirmation) {
            throw new Error('Las contraseñas no son iguales!!');
          }
        }
      }
    },
    password_confirmation: DataTypes.VIRTUAL,
    password_hash : DataTypes.STRING,
  }, {});
  User.login = function(email,password) {
    return User.findOne({where:{
      email : email
    }}).then(function(user){
      if (!user) return null;

      return user.validatePassword(password).then(valid => valid ? user :null);
    });
  };

  User.prototype.validatePassword = function(password){
     return new Promise((res,rej)=>{
       bcrypt.compare(password,this.password_hash,function(err,valid){
          if(err) return rej(err);

          res(valid);
       });
     });
  };

  User.associate = function(models) {
    User.hasMany(models.Task, {as:'tasks', foreingKey: "userId"});
    User.addScope('allAsso', {
        include: [{
          as:'tasks'
        }/*, {
          model: models.SubModel2 ->Para retornar todas las asociaciones
        }*/ ]
      });


  };
  User.beforeCreate(function(user,options) {
    return new Promise((res, rej)=>{
      if (user.password) {
        bcrypt.hash(user.password,10,function(error,hash){
          user.password_hash = hash;
          res();
        });
      }
    });
  });
  return User;
};
