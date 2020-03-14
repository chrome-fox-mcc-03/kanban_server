'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    
      let categories = [{
        id: 1,
        title: 'Backlog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Product',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Develpment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }]
      return queryInterface.bulkInsert('Categories', categories, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Categories', null, {});
  }
};
