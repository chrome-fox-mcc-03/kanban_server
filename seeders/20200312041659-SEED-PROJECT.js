'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Projects', [{
			name: 'Kanban 1',
			description: 'This is description for project Kanban 1',
			projectLeader: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Kanban 2',
			description: 'This is description for project Kanban 2',
			projectLeader: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Kanban 3',
			description: 'This is description for project Kanban 3',
			projectLeader: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Projects', null, {});
	}
};
