'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [5, 15]
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