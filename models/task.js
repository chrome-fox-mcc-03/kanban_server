'use strict';
module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull: {
          args: true,
          msg: 'title cannot be null',
        },
        notEmpty: {
          args: true,
          msg: 'title cannot be empty'
        }
      }
    },
    category: {
      type : DataTypes.STRING,
      allowNull : false
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};