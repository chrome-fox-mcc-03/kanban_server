'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      Task.belongsTo(models.Category)
      Task.belongsTo(models.Group)
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Title cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Title cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Description cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Description cannot be empty'
        }
      }
    },
    GroupId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize
  })
  return Task;
};