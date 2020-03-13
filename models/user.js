'use strict';
const { generate } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Kanban)
    }
  }
  User.init({
    email : {
      type : DataTypes.STRING,
      allowNull : true,
      validate : {
        email : {
          args : true,
          msg : "please insert email with @"
        }
      }
    },
    password : {
      type : DataTypes.STRING,
      allowNull : true,
      validate : {
        len : {
          args : [6],
          msg : "Please insert password minimal 6 letter"
        }
      }
    }
  },{
    sequelize,
    hooks: {
      beforeCreate : (acc, option) => {
        acc.password = generate(acc.password)
      }
    }
  })
  return User;
};