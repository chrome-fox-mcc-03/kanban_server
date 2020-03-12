'use strict';
const { hashing } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Project, { through: models.Member })
    }
  }
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate: (user, opt) => {
        user.password = hashing(user.password)
      }
    }
});

  return User;
};