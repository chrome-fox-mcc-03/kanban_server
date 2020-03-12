'use strict';
module.exports = (sequelize, DataTypes) => {
  class Category extends sequelize.Sequelize.Model {
    static associate(models) {
      Category.hasMany(models.Task)
    }
  }
  Category.init({
    category: DataTypes.STRING
  }, {
    sequelize
  })
  return Category;
};