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

    return queryInterface.bulkInsert('Categories', [{
      category: 'Backlog',
      createdAt: new Date('10-12-2020'),
      updatedAt: new Date('10-12-2020')
    }, {
      category: 'Progress',
      createdAt: new Date('10-12-2020'),
      updatedAt: new Date('10-12-2020')
    }, {
      category: 'Development',
      createdAt: new Date('10-12-2020'),
      updatedAt: new Date('10-12-2020')
    }, {
      category: 'Production',
      createdAt: new Date('10-12-2020'),
      updatedAt: new Date('10-12-2020')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Categories', null, {});
  }
};
