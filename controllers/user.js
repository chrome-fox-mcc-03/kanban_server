const { OAuth2Client } = require('google-auth-library');
const { decode } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');
const { User, ProjectUser } = require('../models');

class UserController {
	static login (req, res, next) {
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

							res.status(200).json({
								token,
								name: result.name
							});
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

				let token = sign(payload);

				res.status(201).json({
					token,
					name
				});
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

	static getUser (req, res, next) {
		User.findAll()
			.then(result => {
				res.status(200).json(result);
			})
			.catch(next)
	}

	static google (req, res, next) {
		let idToken = req.body.idToken;

		const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
		let payload = null;
		client.verifyIdToken({
			idToken,
			audience: process.env.GOOGLE_CLIENT_ID
		})
			.then(result => {
				payload = result.getPayload();
				const email = payload.email;
				return User.findOne({
					where: { email }
				})
			})
			.then(result => {
				if (result) {
					return result
				} else {
					return User.create({
						name: payload.name,
						email: payload.email,
						password: process.env.DEFAULT_PASSWORD
					})
				}
			})
			.then(result => {
				const token = sign({
					id: result.id,
					email: payload.email
				})

				res.status(201).json({
					token,
					name: payload.name
				});
			})
			.catch(next);
	}
}

module.exports = UserController