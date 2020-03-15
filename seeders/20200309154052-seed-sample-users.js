'use strict';
const fs = require("fs")
let samples = JSON.parse(fs.readFileSync("./sample_users.json", "utf8"))
const {hashPassword} = require("../helpers/bcrypt.js")

samples.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  el.password = hashPassword(el.password)
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Users", samples, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Users", null, {})
  }
};
