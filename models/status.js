'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Status = sequelize.define('Status', {
  //   statusName: DataTypes.STRING
  // }, {});
  // Status.associate = function(models) {
  //   // associations can be defined here
  // };
  class Status extends sequelize.Sequelize.Model {
    static associate (models) {
      Status.hasMany(models.Kanban)
    }
  }
  Status.init({
    statusName: DataTypes.STRING
  },{sequelize})
  return Status;
};