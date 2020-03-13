'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please input title"
        },
        notEmpty: {
          args: true,
          msg: "Please input title"
        }
      }
    },
    desc: DataTypes.STRING,
    badge: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0,6],
          msg: "Badge's maximum character is 6, please pick other badge"
        }
      }
    },
    category: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  },
  {
    sequelize
  })

  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };

  return Task;
};