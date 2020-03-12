'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserBoards', ['board_id'], {
      type: 'foreign key',
      name: 'custom_fkey_board_conj_id',
      references: {
        table: 'Boards',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserBoards', 'custom_fkey_board_conj_id')
  }
};
