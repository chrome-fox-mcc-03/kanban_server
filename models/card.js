'use strict';
module.exports = (sequelize, DataTypes) => {
	const { Model } = sequelize.Sequelize;

	class Card extends Model {}

	Card.init({
		description: DataTypes.STRING,
		UserId: DataTypes.INTEGER,
		ProjectId: DataTypes.INTEGER,
		dueDate: DataTypes.DATE,
		status: DataTypes.STRING
	}, {
		sequelize
	})
	Card.associate = function(models) {
		// associations can be defined here
		Card.belongsTo(models.User);
		Card.belongsTo(models.Project);
	};
	return Card;
};