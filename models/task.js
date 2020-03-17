'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model { }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Task name can't be blank`,

        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Task description can't be blank`,
        }
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: `CategoryId can't be blank`,
          }
        }
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: `ProjectId can't be blank`,
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task'
  })

  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.Category)
    Task.belongsTo(models.Project)
  };
  return Task;
};