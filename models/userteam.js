'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class UserTeam extends Model {}

  UserTeam.init({
    TeamId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  },{
    sequelize
  })
  
  UserTeam.associate = function(models) {
    // associations can be defined here
    UserTeam.belongsTo(models.Team)
    UserTeam.belongsTo(models.User)
  };
  return UserTeam;
};