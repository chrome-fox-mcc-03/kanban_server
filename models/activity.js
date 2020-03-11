'use strict';
module.exports = (sequelize, DataTypes) => {
  class Activity extends sequelize.Sequelize.Model {}

  Activity.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.category = 'backlog'
      }
    },
    sequelize,
    modelName: 'Activity'
  })

  Activity.associate = function(models) {
    Activity.belongsTo(models.User)
  };
  return Activity;
};