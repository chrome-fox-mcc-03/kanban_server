const { Team, Task, Category } = require('../models')

class TaskController {
  static getAllTaskEachCategory (req, res, next) {
    Task.findAll({
      where : {
        TeamId : req.params.teamId
      },
      include : [Category, Team]
    })
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(next)
  }

  static createTask (req, res, next) {
    let payload = {
      title: req.body.title,
      description: req.body.description,
      CategoryId: req.body.CategoryId,
      TeamId: req.params.teamId
    }
    Task.create(payload)
      .then(task => {
        res.status(201).json(task)
      })
      .catch(next)
  }

  static getTaskInCategory (req, res, next) {
    Task.findOne({
      where : {
        id : req.params.taskId
      },
      include: [{
        model: Category
      }]
    })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(next)
  }

  static editTask (req, res, next) {
    let payload = {
      title : req.body.title,
      description: req.body.description,
      CategoryId: req.body.CategoryId,
      TeamId: req.params.teamId
    }
    Task.update(payload, {
      where: {
        id : req.params.taskId
      },
      returning : true
    })
    .then(data => {
      res.status(200).json(data[1][0])
    })
    .catch(next)
  }
  
  static deleteTask (req, res, next) {
    Task.destroy({
      where : {
        id: req.params.taskId
      }
    })
      .then(data => {
        res.status(200).json({
          message : 'Deleted task successfully'
        })
      })
      .catch(next)
  }
}

module.exports = TaskController