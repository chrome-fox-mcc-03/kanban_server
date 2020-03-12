'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tasks', [{
        title: 'Remake Index.js', UserId: 1, createdAt: new Date(), updatedAt: new Date()
      }, {title: 'Beautifying dashboard', UserId: 1, createdAt: new Date(), updatedAt: new Date()}, {title: 'Delete Unused Code', UserId: 1, createdAt: new Date(), updatedAt: new Date()}], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Tasks', null, {});
  }
};
