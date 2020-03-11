"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Task extends Model {
    static associate(models) {}
  }

  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Title must be filled"
          },
          notEmpty: {
            args: true,
            msg: "Title cannot be empty"
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Description must be filled"
          },
          notEmpty: {
            args: true,
            msg: "Description cannot be empty"
          }
        }
      },
      UserId: {
        type: DataTypes.INTEGER
      },
      CategoryId: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: "Task"
    }
  );
  return Task;
};
