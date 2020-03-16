'use strict';
const encrypt = require("../helper/encrypt")
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    Email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Must be filled in Email Format!!"
        }
      }
    } ,
    Password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3],
          msg: "Password Must Be At Least 3 Characters"
        }
      }
    } 
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.Password = encrypt(user.Password)
      }
    }, sequelize, modelName: 'User' });
  User.associate = function(models) {
    User.belongsToMany(models.Project, {through: 'ProjectUser'})
    // associations can be defined here
  };
  return User;
};