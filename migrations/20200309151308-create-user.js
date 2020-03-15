'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email format e.g. 'john_doe@mail.com'"
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [6,16],
            msg: "Passwords must be 6-16 characters long"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};