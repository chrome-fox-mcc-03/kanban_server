'use strict';
module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model { }

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter title'
        },
        notEmpty: {
          msg: 'Please enter title'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter category'
        },
        notEmpty: {
          msg: 'Please enter category'
        },
        isIn: {
          args: [['backlog', 'product', 'development', 'done']],
          msg: 'invalid input! Expected value: backlog, product, development, done'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter description'
        },
        notEmpty: {
          msg: 'Please enter description'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter user id'
        },
        notEmpty: {
          msg: 'Please enter user id'
        }
      }
    },
  }, {
    hooks: {
      beforeValidate: (task, options) => {
        if (!task.category) {
          task.category = "backlog";
        }
      }
    },
    sequelize
  })

  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};