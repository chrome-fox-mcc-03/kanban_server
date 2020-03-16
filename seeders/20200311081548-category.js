'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Back Log',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Pre Development',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Development',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Test',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Production',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Done',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
