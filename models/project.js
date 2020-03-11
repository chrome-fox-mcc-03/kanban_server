'use strict';
module.exports = (sequelize, DataTypes) => {
	const { Model } = sequelize.Sequelize;

	class Project extends Model {}

	Project.init({
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		projectLeader: DataTypes.INTEGER
	}, { sequelize })

	Project.associate = function(models) {
		Project.belongsTo(models.User, {
			targetKey: 'id', 
			foreignKey: 'projectLeader'
		})
		
		// Project.belongsToMany(models.User, {
		// 	through: models.ProjectUser
		// })
		Project.hasMany(models.ProjectUser);
	};
	return Project;
};