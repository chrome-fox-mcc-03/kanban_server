const { verToken } = require('../helpers/jwt')
const { User } = require('../models/index')

module.exports = function (req, res, next) {
    try {
        req.decoded = verToken(req.headers.token)
        console.log(req.decoded);
        User.findOne({
            where: {
                id: req.decoded.id,
                email: req.decoded.email
            }
        })
            .then(result => {
                next()
            })
            .catch(err => {
                next({
                    status: 403,
                    msg: {
                        err: 'Forbidden'
                    }
                })
            })
    } catch (err) {
        next({
            status: 403,
            msg: {
                err: 'Forbidden'
            }
        })
    }
}