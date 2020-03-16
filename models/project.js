'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Project extends Model { }
  Project.init({
    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Project name can't be blank`,

        }
      }
    }
  }, {
    sequelize,
    modelName: 'Project'
  })

  Project.associate = function (models) {
    // associations can be defined here
    Project.belongsToMany(models.User, { through: models.Collaboration })
    Project.hasMany(models.Collaboration)
    Project.hasMany(models.Task)
  };
  return Project;
};