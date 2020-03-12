const { verify }  = require('../helpers/jwt')
const { User } = require('../models')
module.exports = function (req, res, next) {
    try {
        let token = req.headers.token;
        req.decoded = verify(token);
        console.log(req.decoded);
        User.findOne({
            where: {
                id: req.decoded.id,
                email: req.decoded.email
            }
        })
            .then(user => {
                if(user) {
                    next()
                } else {
                    next({
                        status: 400,
                        msg: 'Please Login First'
                    })
                }
            })
            .catch(next)
    } catch (error) {
        next(error)
    }
}