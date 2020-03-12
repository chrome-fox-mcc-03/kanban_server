const { User } = require('../models');
const { verify } = require('../helpers/jwt');

module.exports = {
	authentication (req, res, next) {
		console.log(`[AUTHENTICATE]`);
		let { token } = req.headers;
		
		try {
			let { id, email } = verify(token);

			User.findOne({
				where: { id, email }
			})
				.then(result => {
					if (result) {
						req.decoded = { id, email };
						console.log(`[AUTHENTICATION SUCCESS]`);
						next();
					} else {
						next({
							status: 400,
							message: ['Something is wrong. Please Log In again!']
						})
					}
				})
				.catch(next)
		} catch (err) {
			next(err);
		}
	}
}