const { decode } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
	static login (req, res, next) {
		console.log(`hit`);
		let { email, password } = req.body;
		User.findOne({
			where: { email }
		})
			.then(result => {
				if (result) {
					if (decode(password, result.password)) {
						let payload = {
							id: result.id,
							email
						};

						try {
							let token = sign(payload);

							res.status(200).json({ token });
						} catch (err) {
							next(err);
						}
					} else {
						next({
							status: 400,
							message: ['Wrong email/password combination!']
						});
					}
				} else {
					next({
						status: 400,
						message: ['Wrong email/password combination!']
					});
				}
			})
			.catch(err => {
				next(err);
			});
	}

	static register (req, res, next) {
		let { name, email, password, imageUrl } = req.body;
		User.create({
			name,
			email,
			password,
			imageUrl
		})
			.then(result => {
				let payload = {
					id: result.id,
					email
				};

				try {
					let token = sign(payload);

					res.status(201).json({ token });
				} catch (err) {
					next(err);
				}
			})
			.catch(err => {
				next(err);
			});
	}

	static update (req, res, next) {
		let { id } = req.params;
		let { name, email, password, imageUrl } = req.body;

		User.update({
			name,
			email,
			password,
			imageUrl
		}, {
			where: { id },
			returning: [ 'name', 'email', 'imageUrl' ],
			hooks: true
		})
			.then(result => {
				res.status(200).json(result[1]);
			})
			.catch(err => {
				console.log(err);
				next(err);
			})
	}
}

module.exports = UserController