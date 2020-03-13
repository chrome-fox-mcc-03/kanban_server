'use strict';
const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize,
    hooks: {
      beforeCreate : (user, options) => {
        let password = user.password
        user.password = hashPassword(password)
      }
    }
  })
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserTeam)
    User.belongsToMany(models.Team, {through: models.UserTeam})
  };
  return User;
};