const { ProjectUser, Project, User } = require('../models');

class ProjectUserController {
	static invite (req, res, next) {
		let { id, UserId } = req.params;

		if (UserId === req.decoded.id) {
			next({
				status: 400,
				message: ['User already participated!']
			})
		} else {
			ProjectUserController.checkProjectAndUser(id, UserId)
				.then(result => {
					if (result[0] && result[1]) {
						return ProjectUser.create({
							ProjectId: id,
							UserId
						}, {
							include: [ 
								Project, 
								{
									model: User,
									attributes: [ 'name', 'email', 'imageUrl' ]
								}
							]
						})
					} else {
						
						let message = [];
						if (!result[0]) message.push('Project not found!');
						if (!result[1]) message.push('User not found!');

						next({
							status: 400,
							message
						})
					}
				})
				.then(result => {
					res.status(201).json(result);
				})
				.catch(err => {
					if (err.name === 'SequelizeUniqueConstraintError') {
						next({
							status: 400,
							message: ['User already participated!']
						});
					} else {
						next(err);
					}
				});
		}
	}

	static remove (req, res, next) {
		let { id, UserId } = req.params;
		let user = null;
		User.findOne({
			where: { id: UserId }
		})
			.then(result => {
				if (result) {
					user = result;
					return ProjectUser.destroy({
						where: {
							ProjectId: id,
							UserId
						}
					})
				} else {
					throw {
						status: 400,
						message: ['User not found!']
					}
				}
			})
			.then(result => {
				res.status(200).json({
					message: `${user.name} <${user.email}> successfully removed from this project`,
					data: user
				})
			})
			.catch(next)
	}

	static checkProjectAndUser (ProjectId, UserId) {
		let project = Project.findOne({
			where: { id: ProjectId }
		});

		let user = User.findOne({
			where: { id: UserId }
		});

		return Promise.all([project, user]);
	}
}

module.exports = ProjectUserController