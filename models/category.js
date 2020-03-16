'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Category extends Model { }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Category name can't be blank`,

        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category'
  })

  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Task)
  };
  return Category;
};