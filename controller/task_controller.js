const { Task } = require('../models');

class TaskController {
    static create(req, res, next) {
        let { title } = req.body;

        Task.create({
            title,
            UserId: req.decoded.id
        })
            .then(result => {
                res.status(201).json(`you have been successfully added ${result.title} to to do`)
            })
            .catch(error => {
                next(error)
            })
    }

    static show(req, res, next) {
        let { id } = req.decoded;

        Task.findAll({
            where: {
                UserId: id
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                next(error);
            })
    }

    static delete(req, res, next) {
        let id = req.params.id;

        Task.destroy({
            where: {
                id
            }
        })
            .then(result => {
                res.status(200).json(`task has been successfully deleted`)
            })
            .catch(error => {
                next({
                    status: 404,
                    message: `task with selected id can't be found`
                })
            })
    }

    static next(req, res, next) {
        let id = req.params.id;
        
        Task.findOne({
            where: {
                id
            }
        })
            .then(result => {
                if (result.category == 'todo') {
                    return Task.update({
                        category: 'process'
                    }, {
                        where: {
                            id
                        }, returning : true
                    })
                } else if (result.category == 'process') {
                    return Task.update({
                        category: 'to_review'
                    }, {
                        where: {
                            id
                        }, returning : true
                    })
                } else {
                    return Task.update({
                        category: 'done'
                    }, {
                        where: {
                            id
                        }, returning : true
                    })
                }
            })
            .then(result => {
                if (result[1][0].category == 'process') {
                    res.status(200).json(`you have been successfully moved ${result[1][0].title} to table 'process'`);
                } else if (result[1][0].category == 'to_review') {
                    res.status(200).json(`you have been successfully moved ${result[1][0].title} to table 'to review'`);
                } else if (result[1][0].category == "done"){
                    res.status(200).json(`you have been successfully moved ${result[1][0].title} to table 'done'`);
                }
            })
            .catch(error => {
                next({
                    status: 404,
                    message: `task with selected id can't be found`
                })
            })
    }

    static back(req, res, next) {
        let id = req.params.id;

        Task.findOne({
            where: {
                id
            }
        })
            .then(result => {
                if (result.category == 'done') {
                    return Task.update({
                        category: 'to_review'
                    }, {
                        where: {
                            id
                        }, returning : true
                    })
                } else if (result.category == 'to_review') {
                    return Task.update({
                        category: 'process'
                    }, {
                        where: {
                            id
                        }, returning : true
                    })
                } else {
                    return Task.update({
                        category: 'todo'
                    }, {
                        where: {
                            id
                        }, returning : true
                    })
                }
            })
            .then(result => {
                if (result[1][0].category == 'to_review') {
                    res.status(200).json(`you have been successfully moved ${result[1][0].title} to table 'to_review'`);
                } else if (result[1][0].category == 'process') {
                    res.status(200).json(`you have been successfully moved ${result[1][0].title} to table 'process'`);
                } else if (result[1][0].category == "todo"){
                    res.status(200).json(`you have been successfully moved ${result[1][0].title} to table 'todo'`);
                }
            })
            .catch(error => {
                next({
                    status: 404,
                    message: `task with selected id can't be found`
                })
            })
    }
}

module.exports = TaskController;