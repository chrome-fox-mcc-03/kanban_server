'use strict';
const bcrypt = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!'
      },
      validate: {
        notNull: {
          msg: 'Please enter email'
        },
        notEmpty: {
          msg: 'Please enter email'
        },
        isEmail: {
          msg: "please enter valid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter password'
        },
        notEmpty: {
          msg: 'Please enter password'
        },
        len: {
          args: [6],
          msg: "password at least 6 characters!"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate (user, options){
        console.log(user.password, "dari model <<<<<<<<<<<<<<<<<<<<<<<");
        user.password = bcrypt.hash(user.password);
      }
    },
    sequelize
  })

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};