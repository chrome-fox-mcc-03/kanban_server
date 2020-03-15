'use strict';

const { hashPassword } =  require('../helpers')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.GroupUser)
      User.belongsToMany(models.Group, { through: models.GroupUser })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Username cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Email cannot be empty'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email must contain email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Password cannot be empty'
      },
      validate: {
        len: {
          args: [5],
          msg: 'Password cannot less than 5 characters'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    },
    sequelize
  })
  return User;
};