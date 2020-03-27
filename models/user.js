'use strict';
const { hashPass } = require('./../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}

  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "first name at least 2 character"
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "last name at least 2 character"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Input must be in email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "password at least 2 character"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "role at least 2 character"
        }
      }
    }
  },{
    hooks: {
      afterValidate: (user, options) => {
        const hashedPassword = hashPass(user.password)
        user.password = hashedPassword
      }
    },
    validate: {
      emptyString() {
        if(!this.first_name || !this.last_name || !this.email || !this.password || !this.role){
          throw new Error('Field must be filled')
        }
      }
    },
    sequelize,
    modelName: "User"
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};