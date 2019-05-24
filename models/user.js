'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password: DataTypes.STRING,
    password_hash : DataTypes.VIRTUAL
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeCreate = function(user,options) {
    return new Promise(function(res, rej){
      if (user.password) {
        bcrypt.hash(user.password_hash,10,function(error,hash){
          user.password = hash;
          res();
        });
      }
    });
  };
  return User;
};
