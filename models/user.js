'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 15],
          msg: `name should be between 2 and 15 characters`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: `invalid email format`
        }
      },
      unique: {
        args: true,
        msg: `somone has signed up using this email`
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5],
          msg: `password should be at least 5 characters`
        }
      }
    }
  }, { 
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password);
      }
    },
    sequelize 
  });
  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};