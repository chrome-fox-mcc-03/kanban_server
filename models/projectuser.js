'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class ProjectUser extends Model {
    static associate(models){
      ProjectUser.belongsTo(models.User)
      ProjectUser.belongsTo(models.Project)
    }
  }
  ProjectUser.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  },
  {

    sequelize
  })

  return ProjectUser;
};