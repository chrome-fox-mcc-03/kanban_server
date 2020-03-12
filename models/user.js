'use strict';
const { hashingPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{
    static associate(models){
      User.hasMany(models.Task)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Email must be register'
        }, 
        notEmpty: {
          msg: 'Email must be register'
        }, 
        isEmail: {
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password must be register'
        }, 
        notEmpty: {
          msg: 'Password must be register'
        }, 
        len: {
          args: [5, 12],
          msg: 'Password length must between 5 and 12'
        }
      }
    }
  }, 
  {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        let hash = hashingPassword(user.password)
        user.password = hash
      }
    }
  })

  return User;
};