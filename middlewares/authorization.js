const { Task } = require('./../models')

function authorization(req,res,next) {
    console.log(req.params)
    const id = req.params.id
    console.log('masuk author')
    console.log(id)
    Task.findByPk(id)
        .then(result => {
            if (!result) {
                const error = {
                    name: "Kanban task not found"
                }
                throw error
            } else {
                if (result.UserId === req.headers.userId) {
                    next()
                } else {
                    const error = {
                        name: "Access denied"
                    }
                    throw error
                }
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization