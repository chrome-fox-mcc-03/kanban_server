'use strict';
module.exports = (sequelize, DataTypes) => {

  class ProjectUser extends sequelize.Sequelize.Model {}
  ProjectUser.init({
      ProjectId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    }, { sequelize, modelName: 'ProjectUser' });
  ProjectUser.associate = function(models) {
    
    // associations can be defined here
  };
  return ProjectUser;
};