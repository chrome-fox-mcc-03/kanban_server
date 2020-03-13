'use strict';

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
   return queryInterface.bulkInsert('Statuses', [
     {
      statusName : "backlog",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      statusName : "Doing",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      statusName : "Succses",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      statusName : "Done",
      createdAt: new Date(),
      updatedAt: new Date()
     },
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Statuses', null, {});
  }
};
