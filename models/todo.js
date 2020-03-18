'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Todo extends Model {}
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      },
    },
    description: DataTypes.STRING,
    status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(todo, options) {
        if(!todo.description) todo.description = 'No description added.'
      }
    },
    sequelize
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};