const { Task } = require('../models');

class TaskController {
    static findAll(req, res, next) {        
        Task.findAll({
            where: {
                UserId: req.userId
            }
        })
            .then(result => {
                res.status(200).json({
                    data: result
                })
            })
            .catch(err => {
                next(err)
            })
    }
    
    static create(req, res, next) {
        Task.create({
            description: req.body.description,
            CategoryId: 1,
            UserId: req.userId
        })
            .then(result => {
                res.status(201).json({
                    data: result
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        const id = req.params.id
        Task.findOne({
            where: {
                id: id
            }
        })
            .then(result => {
                res.status(200).json({
                    data: result
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static destroy(req, res, next) {
        const id = req.params.id
        let deletedData;
        Task.findOne({
            where: {
                id
            }
        })
            .then(result => {
                deletedData = result
                return Task.destroy({
                    where: {
                        id
                    }
                })
            })
            .then(result => {
                res.status(200).json({
                    data: deletedData
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
        const id = req.params.id
        const { description , CategoryId } = req.body
        const UserId = req.userId
        Task.update({
            description,
            CategoryId,
            UserId
        }, {
            where: {
                id
            },
            returning: true
        })
            .then(result => {
                res.status(201).json({                    
                    data: result[1][0]
                })
            })
            .catch(err => {
                next(err)
            })
    }


}

module.exports = TaskController