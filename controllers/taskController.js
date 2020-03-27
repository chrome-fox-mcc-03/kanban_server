const { Task } = require('../models/index')
class Controller {
    static getTasks(req, res, next) {
        let UserId = req.decoded.id
        Task.findAll({
            where: {
                UserId
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static addTask(req, res, next) {
        let UserId = req.decoded.id
        let title = req.body.title
        Task.create({
            title: title,
            UserId: UserId
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
        let taskId = req.params.id
        let title = req.body.title
        let category = req.body.category
        Task.update({
            title: title,
            category: category
        }, {
            where: {
                id: taskId
            },
            returning: true,
            plain: true
        })
            .then(result => {
                res.status(200).json(result[1])
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        let id = req.params.id
        let data;
        Task.findByPk(id)
            .then(result => {
                data = result
                return Task.destroy({
                    where: {
                        id
                    }
                })
            })
            .then(result => {
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller