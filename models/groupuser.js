'use strict';
module.exports = (sequelize, DataTypes) => {
  class GroupUser extends sequelize.Sequelize.Model {
    static associate(models) {
      GroupUser.belongsTo(models.Group)
      GroupUser.belongsTo(models.User)
    }
  }
  GroupUser.init({
    UserId: {
      type: DataTypes.INTEGER
    },
    GroupId: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize
  })
  return GroupUser;
};