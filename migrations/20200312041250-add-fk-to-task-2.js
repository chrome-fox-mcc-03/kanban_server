'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Tasks', ['board_id'], {
      type: 'foreign key',
      name: 'custom_fkey_board_task',
      references: {
        table: 'Boards',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Tasks', 'custom_fkey_board_task')
  }
};
