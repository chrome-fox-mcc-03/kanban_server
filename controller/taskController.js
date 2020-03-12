"use strict"

const { Task, User } = require('../models/index')

class Controller {
    static createTask(req, res, next){
        const data = {
            title: req.body.title,
            desc: req.body.desc,
            due_date: req.body.due_date,
            creator_id: req.decoded.id,
            board_id: req.params.boardId,
            color: req.body.color,
            category: 'backlog'
        }
        Task.create(data)
        .then(result => {
            res.status(201).json({data:data})
        })
        .catch(next)
    }

    static editTask(req, res, next){
        const data = {
            title: req.body.title,
            desc: req.body.desc,
            due_date: req.body.due_date,
            color: req.body.color
        }
        Task.update(data, {
            where: {
                id: req.params.id
            }
        })
        .then(response => res.status(201).json({msg:'Task edited'}))
        .catch(next)
    }

    static updateStatus(req, res, next){
        const updateCategory = req.body.updateCategory
        const currentCategory = req.body.currentCategory
        const categories = [
            'backlog',
            'todo',
            'ongoing',
            'done'
        ]
        const newCategory = categories[categories.findIndex(el => el == currentCategory) + updateCategory]
        Task.update({
            category: newCategory
        })
        .then(response => res.status(201).json({msg:'Task edited'}))
        .catch(next)
    }

    static deleteTask(req, res, next){
        const taskId = req.params.id
        Task.destroy({
            where: {
                id: taskId
            }
        })
        .then(result => {
            res.status(200).json({msg: 'Task deleted'})
        })
        .catch(next)
    }

    static showTask(req, res, next){
        Task.findAll({
            include: {
                model: User,
                as: 'Creator'
            },
            where: {
                board_id: req.params.boardId
            }
        })
        .then(results => {
            if(results[0]){
                res.status(200).json({tasks: results})
            }
            else {
                res.status(200).json({tasks: null, msg: 'Board is empty.'})
            }
        })
        .catch(next)
    }
}

module.exports = Controller