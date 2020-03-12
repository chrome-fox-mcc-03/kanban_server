'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please insert your name!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please insert your email!'
        },
        isEmail: {
          msg: 'Email is not valid/'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9_]+$/,
          msg: 'Username can only contain letters, numbers, and underscore (_)'
        },
        len: {
          args: [4],
          msg: 'Username is too short. Minimum character of 4!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5],
          msg: 'Password is too short. Minimum character of 5!'
        }
      }
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Board, {
      through: models.UserBoard,
      as: 'Member',
      foreignKey: 'user_id'
    }),
    User.hasMany(models.Board, {
      as: 'Creator',
      foreignKey: 'creator_id'
    })
  };
  return User;
};