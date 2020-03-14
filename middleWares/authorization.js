const { Task } = require('../models/index')

module.exports =function (req, res, next) {
    const id = req.params.id
    Task.findOne({
        where: {
            id
        }
    })
        .then(task => {
            if (task) {
                if(task.UserId == req.userId) {
                    next()
                } else {
                    next({
                        status: 401,
                        message: {
                            errors: 'You do not have authorize to do this'
                        }
                    })
                }
            } else {
                next({
                    status: 404,
                    message: {
                        errors: 'Task not found'
                    }
                })
            }
        })
        .catch(err => next(err))
}