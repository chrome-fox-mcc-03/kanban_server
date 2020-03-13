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
                    status: 400,
                    msg: {
                        err: 'Task Not Found'
                    }
                })
            } else {
                if (result.UserId === req.decoded.id) {
                    next()
                } else {
                    next({
                        status: 401,
                        msg: {
                            err: 'Unauthorized'
                        }
                    })
                }
            }
        })
}