const { Task } = require('../models');
const CustomError = require('../helpers/customError');
const notFound = "Task Not Found!";

class Controller {
    static get(req, res, next) {
        Task.findAll({
            where: {
                UserId: req.userId
            }
        })
            .then((result) => {
                if (result) {
                    res.status(200).json({ data: result })
                } else {
                    throw new CustomError(404, notFound)
                }
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }

    static getById(req, res, next) {
        Task.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                if (result) {
                    res.status(200).json({ data: result })
                } else {
                    throw new CustomError(404, notFound)
                }
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }

    static create(req, res, next) {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            UserId: req.userId
        })
            .then((result) => {
                res.status(201).json({ data: result })
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }

    static update(req, res, next) {
        let params = req.body;
        let data = {
            category: params.category.toLowerCase()
        };

        Task.update(data, {
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                res.status(201).json({ data: result })
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }

    static delete(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                res.status(201).json({ data: "Success delete data!" })
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }
}

module.exports = Controller;
