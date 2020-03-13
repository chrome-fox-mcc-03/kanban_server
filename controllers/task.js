const { Task } = require('../models')

module.exports = {
  createTask(req, res, next) {
    const { title, description } = req.body
    const GroupId = req.headers.groupid

    Task.create({
      title,
      description,
      GroupId
    })
      .then(_ => {
        res.status(201).json({
          message: 'Success Create new Task'
        })
      })
      .catch(next)
  },
  findAllTask(req, res, next) {
    const GroupId = req.headers.groupid
    const CategoryId = req.headers.categoryid

    Task.findAll({
      where: { GroupId, CategoryId }
    })
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(next)
  },
  updateTask(req, res, next) {
    const { id } = req.params
    const { title, description, CategoryId } = req.body

    Task.update({
      title, description, CategoryId
    },{
      where: { id }
    })
      .then(_ => {
        res.status(200).json({
          message: 'Success update Task'
        })
      })
      .catch(next)
  },
  deleteTask(req, res, next) {
    const { id } = req.params

    Task.destroy({
      where: { id }
    })
      .then(_ => {
        res.status(200).json({
          message: 'Success delete Task'
        })
      })
      .catch(next)
  },
  findOneTask(req, res, next) {
    const GroupId = req.headers.groupid
    const CategoryId = req.headers.categoryid
    const { id } = req.params

    Task.findOne({
      where: {
        id, GroupId, CategoryId
      }
    })
      .then(data => {
        if(data) {
          res.status(200).json({
            data
          })
        } else {
          next({
            status: 404,
            message: 'Task not found'
          })
        }
      })
      .catch(next)
  }
}