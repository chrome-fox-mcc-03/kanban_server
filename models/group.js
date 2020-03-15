'use strict';
module.exports = (sequelize, DataTypes) => {
  class Group extends sequelize.Sequelize.Model {
    static associate(models) {
      Group.hasMany(models.GroupUser)
      Group.hasMany(models.Task)
      Group.belongsToMany(models.User, { through: models.GroupUser })
    }
  }
  Group.init({
    group_name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Group name cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Group name cannot be empty'
        }
      }
    }
  },{
    sequelize
  })
  return Group;
};