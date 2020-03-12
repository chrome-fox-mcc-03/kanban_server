'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Tasks', ['creator_id'], {
      type: 'foreign key',
      name: 'custom_fkey_creator_tasks',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Tasks', 'custom_fkey_creator_tasks')
  }
};
