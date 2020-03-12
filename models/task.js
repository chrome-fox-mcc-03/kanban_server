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
    due_date: DataTypes.DATE,
    creator_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
    color: {
      type: DataTypes.STRING
    },
    category: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Board, {
      foreignKey: 'board_id'
    })
  };
  return Task;
};