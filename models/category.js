"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Task);
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Category must be filled"
          },
          notEmpty: {
            args: true,
            msg: "Category cannot be empty"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "Category"
    }
  );

  return Category;
};
