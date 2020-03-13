'use strict';
const { hashPassword } = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email is already in use."
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Email is invalid."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 16],
          msg: "Password must be between 3-16 characters."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user, options) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.ToDo)
  };
  return User;
};