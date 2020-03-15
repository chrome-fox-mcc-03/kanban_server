const { Task } = require('../models')

class TaskController {
    static findAll(req, res, next) {
        Task.findAll({
            order: [['status', 'DESC']]
        })
            .then(tasks => {
                res.status(200).json(tasks)
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        Task.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(task => {
                res.status(200).json(task)
            })
            .catch(next)
    }
    static create(req, res, next) {
        let { title, category, status } = req.body
        Task.create({
            title,
            category,
            status,
            UserId: req.decoded.id
        })
            .then(task => {
                res.status(201).json(task)
            })
            .catch(next)
    }

    static update(req, res, next) {
        let { title, category, status } = req.body;
        Task.update({
            title, 
            category, 
            status
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(next)
    }
}

module.exports = TaskController