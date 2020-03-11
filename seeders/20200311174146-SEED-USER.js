'use strict';
const { encode } = require('../helpers/bcrypt');
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			name: 'John Doe',
			email: 'john@doe.com',
			password: encode('qweqwe'),
			imageUrl: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Jane Doe',
			email: 'jane@doe.com',
			password: encode('qweqwe'),
			imageUrl: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Joe Doe',
			email: 'joe@doe.com',
			password: encode('qweqwe'),
			imageUrl: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {
			individualHooks: true
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
