'use strict';
const { encode } = require('../helpers/bcrypt');
const { Project, ProjectUser } = require('../models');

module.exports = (sequelize, DataTypes) => {
	const { Model } = sequelize.Sequelize;

	class User extends Model {}

	User.init({
		name: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: 'Email cannot be empty!'
				}
			}
		},
		password: DataTypes.STRING,
		imageUrl: DataTypes.STRING
	}, { 
		sequelize,
		hooks: {
			beforeCreate (user, opt) {
				console.log(`hi there`);
				user.password = encode(user.password);
			},
			beforeBulkUpdate (opt) {
				opt.individualHooks = true;
			},
			beforeUpdate (user) {
				if (user.password) user.password = encode(user.password);
			}
		}
	})

	User.associate = function(models) {
		User.hasMany(models.Project, {
			sourceKey: 'id', 
			foreignKey: 'projectLeader'
		});
		User.hasMany(models.Card);
		User.hasMany(models.ProjectUser);
	};
	return User;
};