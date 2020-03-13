'use strict';
const { hashPassword } = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please input your username!"
        },
        isEmail: {
          args: true,
          msg: "Please input with valid email!"
        }
      },
      unique: {
        args: true,
        msg: "E-mail has been register, please use other e-mail"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5],
          msg: "Password at least 5 characters"
        }
      }
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please input your name"
        },
        notNull: {
          args: true,
          msg: "Please input your name"
        }
      }
    }
  },
  {
    hooks: {
      beforeCreate(user, options) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize
  })

  User.associate = function(models) {
    User.hasMany(models.Task)
  };

  return User;
};