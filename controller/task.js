const { Task, Category, Project } = require('../models')

class Controller {
    static createTask(req, res, next){
        Task.create({
            title : req.body.title,
            ProjectId : req.params.pId,
            CategoryId : 1,
        })
        .then(data=> res.status(201).json(data))
        .catch(err=> next(err))
    }
    static findAll(req, res, next){
        Task.findAll({
            where : {ProjectId: req.params.pId},
            order : [['id', 'ASC']]
        })
        .then(data=> res.status(200).json(data))
        .catch(err=> next(err))
    }
    static board(req, res, next){
        Category.findAll({
            order : [['id', 'ASC']]
        })
        .then(data=> res.status(200).json(data))
        .catch(err=> next(err))
    }
    static patch(req, res, next){
        Task.update({
            CategoryId : req.body.CategoryId
        },{
            where : {id : req.params.id},
            returning : true
        })
        .then(data=> {
            console.log(data)
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
    static destroy(req, res, next){
        Task.destroy({
            where : {id: req.params.id}
        })
        .then(data=> res.status(201).json(data))
        .catch(err => next(err))
    }
}

module.exports = Controller