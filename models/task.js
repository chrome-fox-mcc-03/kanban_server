'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    // attributes
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: (Task, options) => {
        Task.category = 'Backlog'
      }
    },
    sequelize,
    modelName: 'Task'
    // options
  });
  
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};