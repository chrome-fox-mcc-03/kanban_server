module.exports = {
	errorHandler (err, req, res, next) {
		if (err.name === 'SequelizeValidationError') {
			// console.log(err.errors);
			err = err.errors.map(el => el.message)
			res.status(400).json({
				message: err
			})
		} else if (err.name === 'SequelizeUniqueConstraintError') {
			res.status(400).json({
				message: ['Email already registered']
			})
		} else if (err.name === 'JsonWebTokenError') {
			res.status(400).json({
				message: ['Please Log In!']
			})
		} else {
			// console.log(err);
			res.status(err.status || 500 ).json(err.message || 'Internal Server Error'); //UPDATE THIS (ERROR MESSAGE CHANGE INTO OBJECT OF ARRAY)
		}
	}
}