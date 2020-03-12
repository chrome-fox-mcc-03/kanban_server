'use strict';
const { hashPassword } = require('../helpers/bcrypt') 
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email Has Been Registered'
      },
      validate: {
        notNull: {
          args: true,
          msg: 'Email Required'
        },
        isEmail: {
          args: true,
          msg: 'Email is not valid'
        }
      }
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: 'Password At Least 6 Character'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
  })
  User.associate = function(models) {
    User.hasMany(models.Task)
  };
  return User;
};