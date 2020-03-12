const { Task, GroupUser } = require('../models')

module.exports = (req, res, next) => {
  const { id } = req.params
  const GroupId = req.headers.groupid

  Task.findOne({
    where: { id, GroupId }
  })
    .then(data => {
      if(data) {
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