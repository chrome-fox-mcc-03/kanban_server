"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Tasks", ["UserId"], {
      type: "foreign key",
      name: "fkey_UserId_Tasks",
      references: {
        table: "Users",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Tasks", "fkey_UserId_Tasks");
  }
};
