'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserBoards', ['user_id'], {
      type: 'foreign key',
      name: 'custom_fkey_user_conj_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserBoards', 'custom_fkey_user_conj_id')
  }
};
