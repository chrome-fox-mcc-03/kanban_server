const { Project, Card, ProjectUser } = require('../models');

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
						status: 404,
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
	},
	cardAuthorization (req, res, next) {
		let UserId = req.decoded.id;
		let { id } = req.params

		Card.findOne({
			where: { id }
		})
			.then(result => {
				if (result) {
					if (result.UserId === UserId) {
						next()
					} else {
						next({
							status: 401,
							message: ['You are unauthorized!']
						})
					}
				} else {
					next({
						status: 404,
						message: ['Card not found!']
					})
				}
			})
			.catch(next)
	},
	kanbanAuthorization (req, res, next) {
		let UserId = req.decoded.id;
		let ProjectId = req.params.id;

		ProjectUser.findOne({
			where: {
				ProjectId,
				UserId
			}
		})
			.then(result => {
				if (result) next()
				else next({
					status: 401,
					message: ['You are unauthorized!']
				})
			})
			.catch(next)
	}
}