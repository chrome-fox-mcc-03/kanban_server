'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          message: `you haven't input any task`
        },
        notEmpty: {
          args: true,
          message: `you haven't input any task`
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'todo'
    },
    UserId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};