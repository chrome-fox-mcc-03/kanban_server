'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Cards', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			description: {
				type: Sequelize.STRING
			},
			UserId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
			},
			ProjectId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Projects',
					key: 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
			},
			dueDate: {
				type: Sequelize.DATE
			},
			status: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Cards');
	}
};