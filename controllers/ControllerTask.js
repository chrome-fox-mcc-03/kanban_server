const { Task } = require('../models/index')

class Controller {
    static findAll (req, res, next) {
        const idRead = req.userId
        Task.findAll({
            where: {
                UserId: idRead
            }
        })
            .then(tasks => {
                res.status(200).json(tasks)
            })
            .catch(err => next(err))
    }

    static create(req, res, next) {
        const titleCreate = req.body.title
        const userIdCreate = req.decoded.id
        Task.create({title: titleCreate, UserId: userIdCreate})
            .then(task => res.status(201).json(task))
            .catch(err =>  {
                if (err.errors) {
                    let errors = []
                    err.errors.forEach(el => {
                        errors.push(el.message)
                    });
                    next({
                        status: 400,
                        message: {
                            errors
                        }
                    })
                } else {
                    next(err)
                }
            })
    }

    static update(req, res, next) {
        const idUpdate = req.params.id
        if(req.body.title) {
            const titleUpdate = req.body.title
            Task.update({title: titleUpdate}, {
                where: {
                    id: idUpdate
                }
            })
                .then(success => res.status(200).json('success'))
                .catch(err => next(err))
        } else {
            const categoryUpdate = req.body.category
            Task.update({category: categoryUpdate}, {
                where: {
                    id: idUpdate
                }
            })
                .then(success => res.status(200).json('success'))
                .catch(err => next(err))
        }
    }

    static deleteTask(req, res, next) {
        const idDelete = req.params.id
        let deleteTask = ''
        Task.findOne({
            where: {
                id: idDelete
            }
        })
            .then(task => {
                if(task) {
                    deleteTask = task
                } else {
                    throw ({
                        status: 404,
                        message: {
                            errors: 'Task not found'
                        }
                    })
                }
                return Task.destroy({
                    where: {
                        id: idDelete
                    }
                })
            })
            .then(_ => res.status(200).json(deleteTask))
            .catch(err => next(err))
    }
}

module.exports = Controller