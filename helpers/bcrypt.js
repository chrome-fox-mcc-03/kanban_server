const bcryptjs = require('bcryptjs');

module.exports = {
	encode (password) {
		let salt = bcryptjs.genSaltSync(10);
		return bcryptjs.hashSync(password, salt);
	},
	decode (password, dbPassword) {
		return bcryptjs.compareSync(password, dbPassword);
	}
}