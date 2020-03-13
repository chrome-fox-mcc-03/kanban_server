'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}

  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill title'
        }
      }
    },
    category: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(task, options) {
        task.category = 'backlog'
      }
    },
    modelName: 'Task'
  })
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};