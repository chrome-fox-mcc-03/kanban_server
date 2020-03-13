'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Boards', ['creator_id'], {
      type: 'foreign key',
      name: 'custom_fkey_creator_boards',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Boards', 'custom_fkey_creator_boards')
  }
};
