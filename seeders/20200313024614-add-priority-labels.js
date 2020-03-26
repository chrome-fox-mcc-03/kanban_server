'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Priorities', [{
      name: 'Task',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Important',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Urgent',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Done',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Priorities', null, {});
  }
};
