'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Project)
      Task.belongsTo(models.Category)
    }
  }
  Task.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Task name cannot be empty'
        },
        notEmpty: {
          msg: 'Task name cannot be empty'
        }
      }
    },
    description: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {sequelize});

  return Task;
};