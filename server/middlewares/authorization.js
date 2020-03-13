const { Task, User } = require('../models')

module.exports = function(req, res, next) {
  Task.findOne({where: {id: req.params.id}})
    .then(data => {
      if (data.UserId === req.id) next()
      else next({name: "DATA NULL", message: "Data Not Found"})
    })
    .catch(err => next(err))
}