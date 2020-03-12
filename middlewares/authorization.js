const { Task } = require('../models')

module.exports = (req, res, next) => {
    Task
        .findByPk(req.params.id)
        .then(task => {
            if(task.UserId === req.currentUserId){
                next()
            } else {
                next({
                    err:404,
                    message: 'This task is unavailable'
                })
            }
        })
}