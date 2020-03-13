'use strict';
const {encrypt} = require('../helpers/helper')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail:true,
        isUnique: (value,next) => {
          console.log(value)
          User.findOne({
            where:{email:value}
          })
          .then((result) => {
            if(result) {
              next({status:500,message:'email has already been used'})
            }else{
              next()
            }
          }).catch((err) => {
            next(err)            
          });
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        len:{
          args:[6],
          msg:'password min 6 characters'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user,options) {
        user.password = encrypt(user.password)
      }
    },
    sequelize
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};