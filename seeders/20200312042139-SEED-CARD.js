'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Cards', [{
			description: 'Card1',
			UserId: 1,
			ProjectId: 1,
			dueDate: new Date('2020-12-12'),
			status: 'Backlog',
			createdAt: new Date(),
			updatedAt: new Date()
			
		}, {
			description: 'Card1',
			UserId: 1,
			ProjectId: 1,
			dueDate: new Date('2020-12-12'),
			status: 'Development',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			description: 'Card1',
			UserId: 1,
			ProjectId: 1,
			dueDate: new Date('2020-12-12'),
			status: 'Done',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			description: 'Card2',
			UserId: 1,
			ProjectId: 1,
			dueDate: new Date('2020-12-12'),
			status: 'Backlog',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			description: 'Card3',
			UserId: 1,
			ProjectId: 1,
			dueDate: new Date('2020-12-12'),
			status: 'Backlog',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			description: 'Card4',
			UserId: 1,
			ProjectId: 1,
			dueDate: new Date('2020-12-12'),
			status: 'Backlog',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Cards', null, {});
	}
};
