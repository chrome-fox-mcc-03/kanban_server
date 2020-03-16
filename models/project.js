'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model {}
  Project.init({
      UserId: DataTypes.INTEGER,
      Title: DataTypes.STRING,
      ProjectUserId: DataTypes.INTEGER
    }, { sequelize, modelName: 'Project' });

  Project.associate = function(models) {
    Project.belongsToMany(models.User, {through: 'ProjectUser'}),
    Project.hasMany(models.Task)

    // associations can be defined here
  };
  return Project;
};