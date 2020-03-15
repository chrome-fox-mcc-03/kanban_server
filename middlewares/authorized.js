const { Task, GroupUser } = require('../models')

module.exports = {
  task(req, res, next) {
    const { id } = req.params
    const GroupId = req.headers.groupid

    Task.findOne({
      where: { id, GroupId }
    })
      .then(data => {
        if (data) {
          req.headers.catId = data.CategoryId
          next()
        } else {
          throw {
            status: 404,
            message: 'Task not found'
          }
        }
      })
      .catch(next)
  }
}