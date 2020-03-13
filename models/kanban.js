'use strict';
module.exports = (sequelize, DataTypes) => {
  class Kanban extends sequelize.Sequelize.Model {
    static associate (models) {
      Kanban.belongsTo(models.Status)
    }
  }
  Kanban.init({
    title : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          args : true,
          msg : "please insert title"
        }
      }
    },
    description : {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please insert description"
        }
      }
    },
    StatusId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  },{sequelize})
  return Kanban;
};