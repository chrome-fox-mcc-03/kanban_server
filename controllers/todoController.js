const Todo = require('../models/index')

class Controller {
    static create(req, res, next) {
        let newData = {
            title: req.title,
            description: req.description,
            status: req.status,
            UserId: req.UserId
        }
        Todo.create(newData)
            .then(todo => {
                return res.status(200).json(todo)
            })
            .catch(err => next(err))
    }
    static read(req, res, next) {
        let userId = req.decoded.id
        Todo.findAll({where: {UserId: userId}})
            .then(todos => {
                return res.status(200).json(todos)
            })
            .catch(err => next(err))
    }
    static update(req, res, next) {
        let u
    }
    static delete(req, res, next) {
        let userId = req.decoded.id
        Todo.destroy({where})
    }
}