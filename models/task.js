'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  })
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};