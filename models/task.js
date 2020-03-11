'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Task title cannot be emtpy',
        },
        notNull: {
          msg: 'Title cannot be null',
        }
      }
    }
  }, {
    sequelize
  });

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Category);
    Task.belongsTo(models.User);
  };
  return Task;
};