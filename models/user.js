'use strict';
const { hashPassword } = require('../helpers/bcrypt') ;

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : 'Email cannot be empty'
        }
      }
    },    
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        notNull : {
          args : true,
          msg : 'Email cannot be empty'
        },
        isEmail : {
          args : true,
          msg : 'Email is not valid'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : {
          args : [6],
          msg : 'Password at least has 6 characters'
        },
        notNull : {
          args : true,
          msg : 'Password cannot be empty'
        }
      }
    },
    avatarUrl: DataTypes.STRING
  },{
    hooks : {
      beforeCreate: (user, options) => {
        user.password = hashPassword (user.password)
      }
    },
    validate :{
      nameIsNull(){
        if(!this.name) {
          throw new Error ('Name cannot be empty');
        }
      },
      passwordIsNull(){
        if(!this.password) {
          throw new Error ('Password cannot be empty');
        }
      }
    },
    sequelize,
    modelName : 'User'
  })
  User.associate = function(models) {
    User.hasMany(models.Task)
  };
  return User;
};