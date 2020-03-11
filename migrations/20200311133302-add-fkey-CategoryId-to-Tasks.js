"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Tasks", ["CategoryId"], {
      type: "foreign key",
      name: "fkey_CategoryId_Tasks",
      references: {
        table: "Categories",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Tasks", "fkey_CategoryId_Tasks");
  }
};
