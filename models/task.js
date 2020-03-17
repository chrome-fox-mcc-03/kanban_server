'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Task extends Model {}

  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    TeamId: DataTypes.INTEGER
  },{
    sequelize
  })
  
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Category)
    Task.belongsTo(models.Team)
  };
  return Task;
};