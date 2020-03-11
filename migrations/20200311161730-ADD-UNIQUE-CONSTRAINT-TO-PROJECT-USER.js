'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addConstraint('ProjectUsers', ['ProjectId', 'UserId'], {
			type: 'unique',
			name: 'Project_User_Unique_Constraint'
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeConstraint('ProjectUsers', 'Project_User_Unique_Constraint');
	}
};
