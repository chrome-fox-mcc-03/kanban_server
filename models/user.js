'use strict';
const { hashPassword } = require("../helpers/bcrypt.js")
module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define('User', {
    class User extends sequelize.Sequelize.Model {}
    User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Please enter a valid email format e.g. 'john_doe@mail.com'"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6,16],
          msg: "Passwords must be 6-16 characters long"
        }
      }
    }
  }, {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hashPassword(user.password)
      },

      beforeUpdate: (user, option) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Tasklist)
    // User.belongsTo(models.Task, {
    //   through: models.Playlist
    // })
    User.hasMany(models.Task)
  };
  return User;
};