'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Task)
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Category name cannot be empty'
        },
        notEmpty: {
          msg: 'Category name cannot be empty'
        }
      }
    }
  }, {sequelize});

  return Category;
};