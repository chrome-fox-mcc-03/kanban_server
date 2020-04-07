'use strict';
const { hashing } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Project, { through: models.Member })
      User.hasMany(models.Member)
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email must be unique'
      },
      validate: {
        notNull: {
          msg: 'Email cannot be empty'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: 'Password length minimal 3 characters'
        },
        notNull: {
          msg: 'Password cannot be empty'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    hooks : {
      beforeCreate: (user, opt) => {
        user.password = hashing(user.password)
      }
    }
});

  return User;
};