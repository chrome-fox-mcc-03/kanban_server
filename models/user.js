'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          args: true,
          msg: 'Please Fill Your Name'
        },
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
    sequelize,
    modelName: 'User'
  })
  return User;
};