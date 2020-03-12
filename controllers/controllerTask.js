const { Task, User } = require('./../models')

class ControllerTask {
    static getTasks (req, res, next) {
        const UserId = req.decoded.id
        Task.findAll({
            where: {
                UserId
            },
            include: [User]
        })
            .then(tasks => {
                res.status(200).json(tasks)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static addTask (req, res, next) {
        const { title,category,description } = req.body
        const UserId = req.decoded.id
        Task.create({
            title,
            category,
            UserId,
            description
        })
            .then(task => {
                res.status(201).json(task)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static getById (req, res, next) {
        const id = req.params.id
        Task.findByPk(id, {
            include: [User]
        })
            .then(task => {
                if (!task) {
                    const error = {
                        name: "Task not found"
                    }
                    throw error
                } else {
                    res.status(200).json(task)
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static update (req,res,next) {
        const id = req.params.id
        const { title,category,description } = req.body
        const UserId = req.decoded.id
        Task.update({
            title,
            category,
            UserId,
            description
        }, {
            where: {
                id
            },
            returning: true
        })
            .then(result => {
                if (result[1].length === 0) {
                    const error = {
                        name: "Task not found"
                    }
                    throw error
                } else {
                    const task = result[1][0]
                    res.status(201).json(task)
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static delete (req, res, next) {
        const id = req.params.id
        let task
        Task.findByPk(id)
            .then(result => {
                if (!result) {
                    const error = {
                        name: "Task not found"
                    }
                    throw error
                } else {
                    task = result
                    Task.destroy({
                        where: {
                            id
                        }
                    })
                }
            })
            .then(deleted => {
                res.status(203).json(task)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = ControllerTask