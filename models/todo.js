'use strict';
module.exports = (sequelize, DataTypes) => {
  class Todo extends sequelize.Sequelize.Model{}
  Todo.init({
    name_box: {
      type:DataTypes.STRING
    },
    description: {
      type:DataTypes.STRING,
      validate: {
        len: {
          args:[2],
          msg:"description min 2 characters"
        }
      }
    },
    UserId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize
  });
  Todo.associate = function(models) {
    Todo.belongsTo(models.User,{foreignKey:'UserId'})
    Todo.hasMany(models.Label)
  };
  return Todo;
};