'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Project extends Model{}

  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Name Cannot Null' },
        notEmpty: { args: true, msg: 'Name Cannot Empty' }
      }
    }
  },{
    sequelize
  })

  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsToMany(models.User, { through : models.UserProject})
    Project.hasMany(models.UserProject)
  };
  return Project;
};