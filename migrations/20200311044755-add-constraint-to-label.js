'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Labels', ['TodoId'], {
      type: 'foreign key',
      name: 'TodoId',
      references: {
        table: 'Todos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeConstraint('Labels','TodoId')
  }
};
