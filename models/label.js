'use strict';
module.exports = (sequelize, DataTypes) => {
  class Label extends sequelize.Sequelize.Model{}
  Label.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        len : {
          args:[1],
          msg:'length min 1 character'
        }
      }
    },
    color: {
      type:DataTypes.STRING
    },
    TodoId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize
  });
  Label.associate = function(models) {
    Label.belongsTo(models.Todo,{foreignKey:'TodoId'})
  };
  return Label;
};