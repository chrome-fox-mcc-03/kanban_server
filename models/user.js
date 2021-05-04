'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        },
        notNull: {
          args: true,
          msg: 'email is required'
        },
        notEmpty: {
          args: true,
          msg: 'email is required'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len: {
          args: [5, 15],
          msg: 'minimum pasword length is 5 characters'
        },
        notNull : {
          args : true,
          msg : `email is required`
        },
        notEmpty: {
          args: true,
          msg: 'password is required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate : (user) => {
        user.password = hashPassword(user.password)
      }
    },
    sequelize
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};