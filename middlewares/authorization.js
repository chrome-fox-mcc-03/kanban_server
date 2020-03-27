const { Task } = require('./../models')

function taskAuthorization(req,res,next) {
    const id = req.params.id
    Task.findByPk(id)
        .then(result => {
            if (!result) {
                const error = {
                    name: "Task not found"
                }
                throw error
            } else {
                if (result.UserId === req.decoded.id) {
                    next()
                } else {
                    const error = {
                        name: "You are not authorized"
                    }
                    throw error
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = { 
    taskAuthorization
}