'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title cannot empty'
        },
        len: {
          args: [4],
          msg: 'Title at least 4 charachter'
        }
      }
    },
    category: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  })
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};