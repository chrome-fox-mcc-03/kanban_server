'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: {
          args: [2, 20],
          msg: "Title must be between 2 to 20 characters"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    validate: {
      emptyString() {
        if (!this.title || !this.category) {
          throw new Error('Value Must Be Filled')
        }
      }
    },
    sequelize,
    modelName: "Task"
  })
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};