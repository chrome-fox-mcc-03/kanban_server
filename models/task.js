'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Project)
      Task.belongsTo(models.Category)
    }
  }
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {sequelize});

  return Task;
};