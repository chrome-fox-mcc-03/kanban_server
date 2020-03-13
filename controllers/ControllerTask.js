const { Task } = require('../models/index')

class Controller {
    static findOne (req, res, next) {
        const idFindOne = req.params.id
        Task.findOne({
            where: {
                id: idFindOne
            }
        })
            .then(task => {
                res.status(200).json(task)
            })
            .catch(err => next(err))
    }

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
        const descriptionCreate = req.body.description
        const userIdCreate = req.decoded.id
        Task.create({title: titleCreate, UserId: userIdCreate, description: descriptionCreate })
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
            const descriptionUpdate = req.body.description
            Task.update({title: titleUpdate, description: descriptionUpdate}, {
                where: {
                    id: idUpdate
                }
            })
                .then(success => res.status(200).json('success'))
                .catch(err => next(err))
        } else if(req.body.category) {
            const categoryUpdate = req.body.category
            console.log(categoryUpdate)
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