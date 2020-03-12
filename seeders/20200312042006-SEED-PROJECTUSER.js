'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('ProjectUsers', [{
			UserId: 1,
			ProjectId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			UserId: 1,
			ProjectId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			UserId: 3,
			ProjectId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('ProjectUsers', null, {});
	}
};
