const { Task, Category } = require('../models')

class TaskController {
    static create (req, res, next){
        let { title, description } = req.body
        let newTask = { title, description }
        newTask.ProjectId = req.projectId
        Task
            .create(newTask)
            .then(task => {
                res.status(201).json(task)
            })
            .catch(next)
    }

    static findAll (req, res, next){
        console.log(' ke hit kesiniiii', req.projectId)
        Task
            .findAll({
                where: {
                    ProjectId : req.projectId
                }, 
                include: [
                    Category
                ]
            })
            .then(tasks => {
                res.status(200).json(tasks)
            })
            .catch(next)
    }

    static findOne (req, res, next){
        Task
            .findOne({
                where: {
                    id : req.params.id
                },
                include: [
                    Category
                ]
            })
            .then(task => {
                res.status(200).json(task)
            })
            .catch(next)
    }

    static update (req, res, next){
        console.log('EDITAN NIH DI SERVERRR')
        let {title, description, CategoryId} = req.body
        Task
            .update({title, description, CategoryId}, {
                where: {
                    id : req.params.id
                }
            })
            .then(task => {
                return Task.findByPk(req.params.id)
            })
            .then( task => {
                res.status(200).json({
                    msg: "Success update data",
                    data: task
                })
            })
            .catch(next)
    }

    static remove (req, res, next){
        let {title, description, CategoryId} = req.body
        let dataDelete
        Task
            .findByPk(req.params.id)
            .then(task => {
                dataDelete = task
                return Task.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then( task => {
                res.status(200).json({
                    msg: "Success delete data",
                    data: dataDelete
                })
            })
            .catch(next)
    }
}

module.exports = TaskController