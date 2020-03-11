'use strict';
module.exports = (sequelize, DataTypes) => {
	const { Model } = sequelize.Sequelize;

	class ProjectUser extends Model {}

	ProjectUser.init({
		UserId: DataTypes.INTEGER,
		ProjectId: DataTypes.INTEGER
	}, { sequelize })

	ProjectUser.associate = function(models) {
		ProjectUser.belongsTo(models.User);
		ProjectUser.belongsTo(models.Project);
	};
	return ProjectUser;
};