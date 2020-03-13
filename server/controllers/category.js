const { Category } = require('../models')

module.exports = class Controller{
  static fetch(req, res, next) {
    Category.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => next(err))
  }
}