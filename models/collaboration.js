'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Collaboration extends Model {}
  Collaboration.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  },{sequelize,
    modelName: 'Collaboration'})
  
  Collaboration.associate = function(models) {
    // associations can be defined here
    Collaboration.belongsTo(models.User)
    Collaboration.belongsTo(models.Project)
  };
  return Collaboration;
};