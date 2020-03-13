'use strict';
const hash = require('../helpers/hashPassword');

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: "Password has at least 6 characters"
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, options) => {
        const hashPass = hash.hashPassword(instance.password)
        instance.password = hashPass
      }
    },
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};