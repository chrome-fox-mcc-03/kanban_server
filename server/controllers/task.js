const { Task } = require('../models')

module.exports = class Controller{
  static create(req, res, next) {
    Task.create({
      task: req.body.task,
      description: req.body.description,
      CategoryId: 1,
      UserId: req.id
    })
      .then(data => {
        res.status(201).json({id: data.id ,task: data.task, description: data.description, CategoryId: data.CategoryId})
      })
      .catch(err => next(err))
  }

  static findAll(req, res, next) {
    Task.findAll({
      where: {UserId: req.id},
      order: [['id', 'ASC']]
    })
      .then(data => {
        // console.log(data)
        let result = []
        data.forEach(element => {
          result.push({id: element.id ,task: element.task, description: element.description, CategoryId: element.CategoryId})
        });
        res.status(200).json(result)
      })
      .catch(err => next(err))
  }

  static findOne(req, res, next) {
    Task.findOne({where: {id: req.params.id}})
      .then(data => {
        // console.log(data)
        data ? res.status(200).json({id: data.id ,task: data.task, description: data.description, CategoryId: data.CategoryId}) : next({name: "DATA NULL", message: "ID that you refer is undefined"})
        
      })
      .catch(err => next(err))
  }

  static update(req, res, next) {
    Task.update({task: req.body.task,
      description: req.body.description,
    }, {where: {id: req.params.id}})
      .then(data => {
        data[0] >= 1 ? res.status(201).json({message: "Success!"}) : next({name: "DATA NULL", message: "Nothing Updated!"})
      })
      .catch(err => next(err))
  }

  static categoryUpdate(req, res, next) {
    Task.update({CategoryId: req.body.CategoryId}, {where: {id: req.params.id}})
      .then(data => {
        if (data) res.status(201).json({message: "Success!"})
        else next({name: "DATA NULL", message: "Category not Found"})
      })
      .catch(err => next(err))
  }

  static destroy(req, res, next) {
    let findOne
    Task.findOne({where: {id: req.params.id}})
      .then(data => {
        findOne = {id: data.id ,task: data.task, description: data.description, CategoryId: data.CategoryId}
        return Task.destroy({where: {id: req.params.id}})
      })
      .then(result => res.status(200).json(findOne))
      .catch(err => next(err))
  }
}