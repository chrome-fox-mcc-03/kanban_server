'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Tasklist = sequelize.define('Tasklist', {
    class Tasklist extends sequelize.Sequelize.Model {}
    Tasklist.init({
    TaskId: DataTypes.INTEGER,
    OwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Tasklist"
  });
  Tasklist.associate = function(models) {
    // associations can be defined here
    Tasklist.belongsTo(models.Task)
    Tasklist.belongsTo(models.User)
  };
  return Tasklist;
};