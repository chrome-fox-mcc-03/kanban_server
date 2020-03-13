'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      Task.belongsTo(models.User)
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please Fill Title'
        }
      }
    },
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (Task, option) => {
        Task.category = 'BACKLOG'
      }
    },
    sequelize,
    modelName: 'Task'
  })
  return Task;
};