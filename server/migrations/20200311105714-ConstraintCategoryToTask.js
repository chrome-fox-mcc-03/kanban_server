'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addConstraint('Tasks', ['CategoryId'], {
    type: 'foreign key',
    name: 'category-to-task',
    references: { //Required field
      table: 'Categories',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
   });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeConstraint("Tasks", 'category-to-task')
  }
};
