'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Task extends Model{}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Title Cannot Null' },
        notEmpty: { args: true, msg: 'Title Cannot Empty' },
      }
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'ProjectId Cannot Null' },
        notEmpty: { args: true, msg: 'ProjectId Cannot Empty' },
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'CategoryId Cannot Null' },
        notEmpty: { args: true, msg: 'CategoryId Cannot Empty' },
      }
    }
  },{
    sequelize
  })

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Category)
    Task.belongsTo(models.Project)
  };
  return Task;
};