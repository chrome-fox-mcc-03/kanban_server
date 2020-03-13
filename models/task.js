'use strict';

const { User } = require('./index')

module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please fill the title.'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description.'
    },
    due_date: {
      type:DataTypes.DATE,
      allowNull:false,
      validate: {
        notNull: {
          args: 'Please insert due date!'
        },
        isAfter: {
          args: String(new Date()),
          msg: 'Date must be in the future!'
        }
      }
    },
    creator_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
    color: {
      type: DataTypes.STRING,
      defaultValue: 'gray'
    },
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task'
  });
  Task.associate = function(models) {
    Task.belongsTo(models.Board, {
      foreignKey: 'board_id'
    }),
    Task.belongsTo(models.User, {
      foreignKey: 'creator_id'
    })
  };
  return Task;
};