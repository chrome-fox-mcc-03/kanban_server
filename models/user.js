'use strict';
const { bcrypt } = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty',
        },
        isEmail: {
          args: true,
          msg: 'Email format is invalid',
        },
        notNull: {
          msg: 'Email cannot be null',
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password cannot be emtpy',
        },
        notNull: {
          msg: 'Password cannot be null',
        },
        len: {
          args: [6],
          msg: 'Password should containt at least 6 characters',
        },
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashPassword(user.password);
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Category);
    User.hasMany(models.Task);
  };
  return User;
};