'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args : true,
          msg : 'Title cannot be empty'
        }
      }
    },
    category: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args : true,
          msg : 'Category cannot be empty'
        }
      }
    },
    UserId: DataTypes.INTEGER
  },{
    sequelize,
    modelName : 'Task'
  })
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};