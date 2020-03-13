'use strict';
const { encryptPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model { }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, options) {
        user.password = encryptPassword(user.password)
      }
    }
  })

  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Project, { through: models.Collaboration })
    User.hasMany(models.Collaboration)
  };
  return User;
};