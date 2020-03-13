'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Category = sequelize.define('Category', {
  //   category: DataTypes.STRING
  // }, {});

  class Category extends sequelize.Sequelize.Model{}
  Category.init({
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          message: "Please fill this category"
        },
        notEmpty: {
          args: true,
          message: "Please fill this category"
        },
        
      }
    },
  }, {sequelize, modelName: 'Category'})
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Task)
  };
  return Category;
};