'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {}
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Task'
  })
  
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Category)
    Task.belongsTo(models.Project)
  };
  return Task;
};