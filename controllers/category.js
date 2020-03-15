const { Category } = require('../models')

module.exports = (req, res, next) => {
  Category.findAll()
    .then(data => {
      res.status(200).json({
        data
      })
    })
    .catch(next)
}