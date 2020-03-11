const { Project, User } = require('../models');

module.exports = {
	projectAuthorization (req, res, next) {
		let userId = req.decoded.id;
		let projectId = req.params.id;
		
		Project.findOne({
			where: { id: projectId }
		})
			.then(result => {
				if (result) {
					if (result.projectLeader === userId) {
						next();
					} else {
						next({
							status: 401,
							message: ['You are unauthorized!']
						})
					}
				} else {
					next({
						status: 400,
						message: ['Project not found!']
					})
				}
			})
			.catch(next);
	},
	userAuthorization (req, res, next) {
		let loggedIn = req.decoded.id;
		let userId = +req.params.id;

		if (loggedIn !== userId) {
			next({
				status: 401,
				message: ['You are unauthorized!']
			});
		} else {
			next();
		}
	}
}