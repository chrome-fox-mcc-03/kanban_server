'use strict';
module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model {}
  Task.init({
    Title: DataTypes.STRING,
    Content: DataTypes.STRING,
    Category: DataTypes.STRING,
    Due_date: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, { sequelize, modelName: 'Task' });
  Task.associate = function(models) {
    Task.belongsTo(models.Project)
    // associations can be defined here
  };
  return Task;
};