'use strict';
const Bcrypt = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define('User', {
    
    
  // }, {});

  class User extends sequelize.Sequelize.Model{}
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        message: "Please use another email"
      },
      validation: {
        isEmail: {
          args: true,
          message: "Please use Email format"
        },
        notNull: {
          args: true,
          message: "Please fill this email"
        },
        notEmpty: {
          args: true,
          message: "Please fill this email"
        },
        notContains: {
          args: ' ',
          message: 'Please use Email format'
        }        
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          message: "Please fill this password field"
        },
        len: {
          args: [5],
          message: "Minimum length is 5"
        },
      },
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = Bcrypt.hash(User.password)
      }
    },
    sequelize, modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};