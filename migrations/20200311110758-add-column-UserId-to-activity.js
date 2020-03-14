'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Activities', 'UserId', Sequelize.INTEGER, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Activities', 'UserId')
  }
};
