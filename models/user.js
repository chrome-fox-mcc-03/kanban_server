'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email already been used, try anothen email'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill Email'
        },
        isEmail: {
          args: true,
          msg: 'Please input your email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill Password'
        },
        len: {
          args: [6],
          msg: 'Password atleast have 6 characters'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(user, options) {
        user.password = hashPassword(user.password)
      }
    },
    modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};