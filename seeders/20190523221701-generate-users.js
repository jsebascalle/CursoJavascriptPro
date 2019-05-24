'use strict';
const faker = require("faker");
const bcrypt = require("bcrypt");
module.exports = {
  up: (queryInterface, Sequelize) => {
        var newData = [];

        for (let i = 0; i < 20; i++) {
            const seedData = {
                email: faker.internet.email(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                password_hash: bcrypt.hashSync("12345678",10),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            newData.push(seedData);
        }

        return queryInterface.bulkInsert('users', newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
