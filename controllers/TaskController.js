const { Task } = require('../models/index');

class TaskController {

    static create(req, res, next) {
        let input = {
            title: req.body.title,
            desc: req.body.desc,
            badge: req.body.badge,
            category: req.body.category,
            UserId: +req.decoded.id
        }

        Task.create(input)
            .then(response => {
                res.status(201).json({response})
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        let id = +req.decoded.id;
        Task.findAll({
            where: {
                UserId: id
            },
            order: [
                ['updatedAt', 'ASC']
            ]
        })
            .then(response => {
                res.status(200).json({response})
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        let id = +req.params.id;
        Task.destroy({
            where: { id }
        })
            .then(response => {
                let message = "Task deleted"
                res.status(200).json({message})
            })
            .catch(err => {
                err = {
                    status: 404,
                    msg: "Todo not found!"
                }
                next(err)
            })
    }

    static update(req, res, next) {
        let id = +req.params.id;

        Task.update({
            category: req.body.category,
            title: req.body.title,
            badge: req.body.badge,
            desc: req.body.desc
        }, {
            where: { id }
        })
            .then(response => {
                let message = "Task updated"
                res.status(200).json({message})
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TaskController
