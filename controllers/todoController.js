const { Todo } = require('../models/index')

class Controller {
    static create(req, res, next) {
        let newData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            UserId: req.decoded.id
        }
        console.log('masuk dong')
        Todo.create(newData)
            .then(todo => {
                return res.status(200).json(todo)
            })
            .catch(err => next(err))
    }
    static read(req, res, next) {
        let userId = req.decoded.id
        console.log(req.decoded, 'mau masuk sini')
        Todo.findAll({where: {UserId: userId}})
            .then(todos => {
                console.log('bisa baca')
                return res.status(200).json(todos)
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }
    static update(req, res, next) {
        let u
    }
    static delete(req, res, next) {
        
        Todo.destroy({where: {id: req.params.id}})
            .then(todo => {
                if(todo[0] == 0) throw {status: 404, customName: 'Item not found!'}
                else return Todo.findOne({where: {id: id}})
            })
            .then(todo => {
                return res.status(201).json(todo)
            })
            .catch(err => next(err))
    }
}

module.exports = Controller