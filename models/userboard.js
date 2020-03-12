'use strict';
module.exports = (sequelize, DataTypes) => {
  class UserBoard extends sequelize.Sequelize.Model{}
  UserBoard.init({
    user_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBoard'
  });
  UserBoard.associate = function(models) {
    // associations can be defined here
  };
  return UserBoard;
};