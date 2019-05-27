'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});


  Task.associate = function(models) {
    Task.belongsTo(models.User, {as:'user',foreignKey: 'userId'});
    Task.belongsToMany(models.Category, {through:'TaskCategories', as:'categories',foreignKey: 'taskId',otherKey: 'categoryId'});
  };


  return Task;
};
