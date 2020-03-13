const { Task } = require('../models')

module.exports = 
  class TaskController {
    static findAll (req, res, next) {
      const { GroupId } = req.headers
      Task.findAll({
        where: { GroupId }
      })
      .then(tasks => res.status(200).json({ tasks }))
      .catch(next)
    }
    
    static findByPk (req, res, next) {
      const { id } = req.params
      Task.findByPk(id)
        .then(task => {
          if (!task) throw {
            status: 404,
            message: 'Task not found'
          }
          else res.status(200).json({ task })
        })
        .catch(next)
    }

    static create (req, res, next) {
      const { name, description, GroupId } = req.body
      Task.create({ name, description, GroupId })
        .then(() => res.status(201).json({ message: 'Create task successful' }))
        .catch(next)
    }

    static edit (req, res, next) {
      const { name, description, GroupId } = req.body
      Task.update({ name, description, GroupId })
        .then(() => res.status(200).json({ message: 'Update task successful' }))
        .catch(next)
    }

    static delete (req, res, next) {
      const { id } = req.params
      Task.destroy({
        where: { id }
      })
      .then(response => {
        if (!response) throw {
          status: 404,
          message: 'Task not found'
        }
        else res.status(200).json({ message: 'Delete task successful' })
      })
      .catch(next)
    }
  }