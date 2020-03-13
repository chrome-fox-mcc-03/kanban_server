'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.User, { through: models.Member })
      Project.hasMany(models.Task)
    }
  }
  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Project name cannot be empty'
        },
        notEmpty: {
          msg: 'Project name cannot be empty'
        }
      }
    }
  }, {sequelize});

  return Project;
};