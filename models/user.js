'use strict';
const Helper = require('../helper/helper')
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model{}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Name Cannot Null' },
        notEmpty: { args: true, msg: 'Name Cannot Empty' },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail : {args: true, msg: 'Must in Email Format'},
        notNull: { args: true, msg: 'Email Cannot Null' },
        notEmpty: { args: true, msg: 'Email Cannot Empty' },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Password Cannot Null' },
        notEmpty: { args: true, msg: 'Password Cannot Empty' },
      }
    }
  },{
    sequelize,
    hooks : {
      beforeCreate : (user, option) => {
        user.password = Helper.hashPassword(user.password)
      }
    }
  })
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Project, {through : models.UserProject})
    User.hasMany(models.UserProject)
  };
  return User;
};