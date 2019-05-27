'use strict';
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
      var newData = [];

      for (let i = 1; i < 30; i++) {
          const seedData = {
            description: "TAREA "+i,
            createdAt : new Date(),
            updatedAt : new Date(),
            userId: faker.random.number({min:1, max:19})
          };
          newData.push(seedData);
      }

      return queryInterface.bulkInsert('tasks', newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};
