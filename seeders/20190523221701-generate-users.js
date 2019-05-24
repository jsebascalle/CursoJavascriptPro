'use strict';
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
        var newData = [];

        for (let i = 0; i < 20; i++) {
            const seedData = {
                email: faker.internet.email(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                password: faker.internet.password(),
                createdAt: new Date(),
                updatedAt: new Date(),
                id: i,
            };
            newData.push(seedData);
        }

        return queryInterface.bulkInsert('users', newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
