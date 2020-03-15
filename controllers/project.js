const { Project, User, ProjectUser, Card } = require('../models');

class ProjectController {
	static create (req, res, next) {
		let projectLeader = req.decoded.id;
		let { name, description } = req.body;

		let project = null;

		Project.create({
			name,
			description,
			projectLeader
		})
			.then(result => {
				project = result;
				return ProjectUser.create({
					ProjectId: result.id,
					UserId: projectLeader
				});
			})
			.then(result => {
				res.status(201).json(project);
			})
			.catch(next)
	}

	static getUserProject (req, res, next) {
		let UserId = req.decoded.id;

		ProjectUser.findAll({
			where: { UserId },
			include: [ Project ]
		})
			.then(result => {
				let projects = result.map(el => el.Project);
				res.status(200).json(projects);
			})
			.catch(next)
	}

	static delete (req, res, next) {
		let { id } = req.params;
		let project = null;

		Project.findOne({
			where: {
				id
			}
		})
			.then(result => {
				if (result) {
					project = result;
	
					return Project.destroy({
						where: {
							id
						}
					})
				} else {
					throw {
						status: 404,
						message: ['Project not found!']
					};
				}
			})
			.then(result => {
				res.status(200).json({
					message: 'Project successfuly deleted!',
					data: project
				});
			})
			.catch(next)
	}
	
	static update (req, res, next) {
		let { id } = req.params;
		let { name, description } = req.body;

		Project.update({
			name,
			description
		}, {
			where: { id }
		})
			.then(result => {
				return Project.findOne({
					where: { id },
					include: [{
						model: User,
						attributes: [ 'name', 'email', 'imageUrl' ]
					}]
				})
			})
			.then(result => {
				res.status(200).json({
					message: 'Project successfuly updated!',
					data: result
				})
			})
			.catch(next)
	}

	static setLeader (req, res, next) {
		let { id, projectLeader } = req.params;

		Project.update({
			projectLeader
		}, {
			where: { id },
			silent: true
		})
			.then(result => {
				return Project.findOne({
					where: { id },
					include: [{
						model: User,
						attributes: [ 'name', 'email', 'imageUrl' ]
					}]
				})
			})
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				if (err.name === 'SequelizeForeignKeyConstraintError') {
					next({
						status: 400,
						message: ['User not found!']
					})
				} else {
					next(err)
				}
			});
	}

	static getKanban (req, res, next) {
		let ProjectId = req.params.id;

		Card.findAll({
			where: { ProjectId },
			include: [ User ],
			order: [['createdAt', 'ASC']]
		})
			.then(result => {
				console.log(result);
				let cards = {
					'Backlog': [],
					'Product': [], 
					'Development': [], 
					'Done': []
				};
				result.forEach(el => {
					cards[el.status].push(el);
				})
				res.status(200).json(cards);
			})
			.catch(next)
	}
}

module.exports = ProjectController