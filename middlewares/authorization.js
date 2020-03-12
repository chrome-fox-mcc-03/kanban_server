const { Task } = require('../models')

module.exports = (req, res, next) => {
    console.log(req.params.id)
    console.log('INI PARAMS ID NIHHHH')
    console.log(+req.params.id)
    Task
        .findByPk(+req.params.id)
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
        .catch(next)
        
}