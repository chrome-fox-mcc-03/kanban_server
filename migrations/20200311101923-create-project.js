'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Projects', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			projectLeader: {
				type: Sequelize.INTEGER,
				references : {
					model : 'Users',
					key : 'id'
				},
				onDelete: 'cascade',
				onUpdate: 'cascade'
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
		return queryInterface.dropTable('Projects');
	}
};