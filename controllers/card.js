const { Card, User, Project } = require('../models');

class CardController {
	static create (req, res, next) {
		let { description, dueDate, status, ProjectId } = req.body;
		let UserId = req.decoded.id;

		Card.create({
			description,
			dueDate,
			status,
			UserId,
			ProjectId
		})
			.then(result => {
				res.status(201).json(result);
			})
			.catch(next)
	}

	static update (req, res, next) {
		let { description, dueDate } = req.body;
		let { id } = req.params;
		
		Card.update({
			description,
			dueDate
		}, {
			where: { id },
			returning: true
		})
			.then(result => {
				res.status(201).json(result[1]);
			})
			.catch(next)
	}

	static delete (req, res, next) {
		let { id } = req.params;
		let card = null;

		Card.findOne({
			where: { id }
		})
			.then(result => {
				card = result;
				return Card.destroy({
					where: { id }
				})
			})
			.then(result => {
				res.status(200).json({
					message: `Card successfully deleted!`,
					data: card
				})
			})
	}

	static move (req, res, next) {
		let { id, status } = req.params;
		
		Card.update({
			status
		}, {
			where: { id },
			returning: true
		})
			.then(result => {
				res.status(201).json(result[1]);
			})
			.catch(next)
	}
}

module.exports = CardController;