const { Task } = require('../models/index')

class TaskController {

    static findAll(req,res,next){
        let CategoryId = req.query.CategoryId
        let ProjectId = req.query.ProjectId

        Task.findAll({where:{CategoryId,ProjectId}})
        .then(result=>{
            res.status(200).json({tasks:result})
        })
    }
    static create(req, res, next) {
        let input = {
            title: req.body.title,
            description: req.body.description,
            CategoryId: req.body.CategoryId,
            ProjectId: req.body.ProjectId
        }
        Task.create(input)
            .then(result => {
                res.status(201).json({ msg: `Task created!`, task: result })
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        let id = req.params.id
        Task.findByPk(id)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }

    static update(req, res, next) {
        let id = req.params.id
        let input = {
            title: req.body.title,
            description: req.body.description,
        }
        Task.update(input, { where: { id }, returning: true })
            .then(result => {
                res.status(200).json({ msg: `Task updated!`, task: result[1][0] })
            })
            .catch(next)
    }


    static changeCategory(req, res, next) {
        let id = req.params.id
        let input = {
            CategoryId: req.body.CategoryId
        }

        Task.update(input, { where: { id }, returning: true })
            .then(result => {
                res.status(200).json({ msg: `Task category updated!`, task: result[1][0] })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        let id = req.params.id
        Task.findByPk(id)
            .then(result => {
                const task = result
                return Task.destroy({ where: { id } })
                    .then(result => {
                        res.status(200).json({ msg: `Data deleted!`, project: task })
                    })
            })
            .catch(next)
    }
}



module.exports = TaskController