'use strict';
const Helper = require('../helper/helper')
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model{}

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
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