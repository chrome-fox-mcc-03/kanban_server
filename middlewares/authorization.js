const { verify } = require('../helpers/jwt')
const { Task } = require('../models')
module.exports = function(req, res, next) {
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(task => {
            if(task) {
                if(task.UserId === req.decoded.id) {
                    next()
                } else {
                    next({
                        status: 401,
                        message: 'You dont have permission to access this feature'
                    })
                }
            } else {
                next({
                    status: 404,
                    message: 'Task Not Found'
                })
            }
        })
            .catch(next)
}