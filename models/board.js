'use strict';
module.exports = (sequelize, DataTypes) => {
  class Board extends sequelize.Sequelize.Model {}
  Board.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please fill the title.'
        }
      }
    },
    background_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    creator_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Board'
  });
  Board.associate = function(models) {
    Board.belongsToMany(models.User, {
      through: models.UserBoard,
      as: 'Member',
      foreignKey: 'user_id'
    }),
    Board.hasMany(models.task, {
      foreignKey: 'board_id'
    }),
    Board.belongsTo(models.User, {
      as: 'Creator',
      foreignKey: 'creator_id'
    })
  };
  return Board;
};