const { Task, User } = require('../models/')

class TaskController {

  static create(req, res, next) {
    Task.create({
      title: req.body.title,
      description: req.body.description,
      UserId: req.currentUserId
    })
    .then((task) => {
      res.status(201).json(task)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

  static display(req, res, next) {
    Task.findAll({
      where: {
        UserId: req.currentUserId
      },
      include: [{
        model: User,
        attributes: {
          exclude: ['password']
        }
      }]
    })
    .then((task) => {
      res.status(200).json(task)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

  static findId(req, res, next) {
    let id = req.params.id
    Task.findByPk(id)
    .then((task) => {
      if(!task) {
        res.status(404).jason({ message:'Task not Found'})
      }
      else{
        res.status(200).json(task)
      }
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

  static edit(req, res, next) {
    console.log(req.body.category);
    Task.update({
      category: req.body.category
      
    },{
      where: {
        id: req.params.id
      },
      returning: true
    })
    .then((result) => {
      if(!result[1]) {
        res.status(404).jason({ message:'Task not Found'})
      }
      else{
        res.status(200).json(result[1][0])
      }
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  }

  static delete(req, res, next) {
    Task.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((task) => {
      if(!task) {
        res.status(404).jason({ message:'Task not Found'})
      }
      else{
        res.status(200).json({ message: 'Delete success'})
      }
    })
    .catch((err)=> {
      res.status(500).json(err)
    })
  }
}

module.exports = TaskController