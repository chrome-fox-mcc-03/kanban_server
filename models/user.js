"use strict";
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task);
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email has already been used"
        },
        validate: {
          notNull: {
            args: true,
            msg: "Email must be filled"
          },
          isEmail: {
            args: true,
            msg: "Email must be a valid email"
          },
          notEmpty: {
            args: true,
            msg: "Email cannot be empty"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Password must be filled"
          },
          len: {
            args: [3],
            msg: "Password must contain at least 3 characters"
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Username must be filled"
          },
          notEmpty: {
            args: true,
            msg: "Username cannot be empty"
          }
        }
      },
      url: {
        type: DataTypes.STRING
      }
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        }
      },
      sequelize,
      modelName: "User"
    }
  );

  return User;
};
