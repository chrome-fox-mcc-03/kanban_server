'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Task = sequelize.define('Task', {
    class Task extends sequelize.Sequelize.Model {}
    Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        isEmpty: {
          isEmpty: false,
          args: "Title must be filled."
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "requested"
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      isEmpty: false,
      validate: {
        beforeToday() {
          if (this.due_date < new Date()) {
            throw new Error("Due date must be today or later")
          }
        }
      }
    },
    UserId: DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: "Task",
    hooks: {
      afterCreate: (task, option) => {
        if(task.category === "pending" && task.due_date > new Date()) {
          task.status = "backlog"
        }
      },
      afterUpdate: (task, option) => {
        if(task.category === "pending" && task.due_date > new Date()) {
          task.status = "backlog"
        }
      }
    }
  });
  Task.associate = function(models) {
    // associations can be defined here
    // Task.hasMany(models.Tasklist)
    // Task.belongsTo(models.User, {
    //   through: models.Playlist
    // })
    Task.belongsTo(models.User)
  };
  return Task;
};