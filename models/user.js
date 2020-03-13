'use strict';
const { getHash } = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {};
  User.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email already registered"
      },
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Email is required"
        },
        notEmpty: {
          args: true,
          msg: "Email is required",
        },
        isEmail: {
          args: true,
          msg: "Wrong email format",
        }
      }
    },
    avaurl: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password is required",
        },
        notEmpty: {
          args: true,
          msg: "Password is required",
        },
        len: {
          args: [6],
          msg: "Minimum password length is 6 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: "User"
  });
  User.addHook('beforeCreate', (user, options) => {
    user.password = getHash(user.password);
    if (!user.name) {
      user.name = user.email.split("@")[0]
    }
    if (!user.avaurl) {
      user.avaurl = `https://api.adorable.io/avatars/40/${user.email}.png`
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Item)
  };
  return User;
};