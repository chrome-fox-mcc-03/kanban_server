'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        category: 'BACKLOG',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        category: 'TODO',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        category: 'DONE',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        category: 'COMPLETED',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
