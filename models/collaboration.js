'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Collaboration extends Model { }
  Collaboration.init({
    UserId: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `UserId can't be blank`,
        }
      }
    },
    ProjectId: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `UserId can't be blank`,
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Collaboration'
  })

  Collaboration.associate = function (models) {
    // associations can be defined here
    Collaboration.belongsTo(models.User)
    Collaboration.belongsTo(models.Project)
  };
  return Collaboration;
};