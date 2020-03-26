'use strict';
module.exports = (sequelize, DataTypes) => {
  class Item extends sequelize.Sequelize.Model {};
  Item.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Descriptions are required",
        },
        notEmpty: {
          args: true,
          msg: "Descriptions are required",
        },
      },
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Due date is required",
        },
        isDate: {
          args: true,
          msg: "Unknown date format",
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notNull: {
          args: true,
          msg: "Status is required"
        },
        notEmpty: {
          args: true,
          msg: "Status is required"
        }
      }
    },
    priority: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    },
  },{
    sequelize,
    modelName: "Item",
  })
  Item.addHook('beforeValidate', (item, options) => {
    if (!item.status) {
      item.status = 'Backlog';
    }
  });
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.User);
  };
  return Item;
};