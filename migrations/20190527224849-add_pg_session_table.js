'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('session', {
      sid: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      sess: {
        type: Sequelize.JSON,
      },
      expire: {
        allowNull: false,
        type: 'TIMESTAMP'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('session');
  }
};
