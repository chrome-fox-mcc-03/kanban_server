'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Boards', 'background_id',{
      type: Sequelize.STRING
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Boards', 'background_id',{
      type: Sequelize.INTEGER
    })
  }
};
