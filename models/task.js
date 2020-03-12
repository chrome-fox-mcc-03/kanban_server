'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      Task.belongsTo(models.User)
    }
  }
  Task.init({
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task'
  })
  return Task;
};