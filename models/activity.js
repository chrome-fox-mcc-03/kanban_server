'use strict';
module.exports = (sequelize, DataTypes) => {
  class Activity extends sequelize.Sequelize.Model {}

  Activity.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity'
  })

  Activity.associate = function(models) {
    Activity.belongsTo(models.User)
  };
  return Activity;
};