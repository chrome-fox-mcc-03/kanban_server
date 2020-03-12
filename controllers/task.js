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

    Task.findAll({
      where: { GroupId }
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
  }
}