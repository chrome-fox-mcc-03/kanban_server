'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Model extends Model {
    static associate(models) {}
  }

  Member.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {sequelize});

  return Member;
};