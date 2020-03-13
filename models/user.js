'use strict';
const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          msg : 'Name is required'
        },
        notEmpty: {
          args : true,
          msg : 'Name is required'
        }
      }
    }, 
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          msg : 'Email is required'
        },
        notEmpty : {
          args : true,
          msg : 'Email is required'
        },
        isEmail : {
          args : true,
          msg : 'Format Email is wrong'
        }
      }
    }, 
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          msg : 'Password is required',
        },
        notEmpty : {
          args : true,
          msg : 'Password is required'
        },
        lengthPassword (value, next) {
          if (value.length >= 8) {
            next()
          } else {
            next('minimum password length is 8 character')
          }
        }
      }
    }
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