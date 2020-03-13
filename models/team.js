'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Team extends Model {}

  Team.init({
    name: DataTypes.STRING
  },{
    sequelize
  })
  
  Team.associate = function(models) {
    // associations can be defined here
    Team.hasMany(models.Task)
    Team.belongsToMany(models.User, {through: models.UserTeam})
    Team.hasMany(models.UserTeam)
  };
  return Team;
};