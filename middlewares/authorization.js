const { Task } = require('../models/index')

module.exports = function (req, res, next) {
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            if (!result) {
                next({
                    name: 'authorization',
                    status: 403,
                    msg: {
                            message: 'Unauthorized, only Super Admin can do this action!'
                        }
                })
            } else {
                if (result.UserId === req.decoded.id) {
                    next()
                } else {
                    next({
                        name: 'authorization',
                        status: 403,
                        msg: {
                                message: 'Unauthorized'
                            }
                    })
                }
            }
        })
        .catch(error => {
            next({
                name: 'authorization',
                status: 403,
                msg: {
                        message: 'Unauthorized'
                    }
            })
        })
}