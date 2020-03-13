'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Task = sequelize.define('Task', {
  //   task: DataTypes.STRING,
  //   description: DataTypes.STRING,
  //   CategoryId: DataTypes.INTEGER,
  //   UserId: DataTypes.INTEGER
  // }, {});

  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    task: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          message: "Please fill the task you want to create"
        },
        notEmpty: {
          args: true,
          message: "Please fill the task you want to create"
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      validation: {
        notEmpty: {
          args: true,
          message: "You can't just send a empty string you bloody"
        },
      }
    },
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {sequelize, modelName: 'Task'})
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
    Task.belongsTo(models.Category)
  };
  return Task;
};