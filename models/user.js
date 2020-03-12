'use strict';
const {
  Hash
} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Task)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        // allowNull: {
        //   args: false,
        //   msg: 'Please Fill Your Name'
        // },
        notEmpty: {
          args: true,
          msg: 'Please Fill Your Name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email Already'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please Fill Your Mail'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Please Fill Password (Your Password Should be alphanumeric)'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, option) => {
        User.password = Hash(User.password)
      }
    },
    sequelize,
    modelName: 'User'
  })
  return User;
};