const { Category } = require('../models')

module.exports = 
  class GroupController {
    static findAll (req, res, next) {
      Category.findAll()
        .then(categories => res.status(200).json({ categories }))
        .catch(next)
    }
  }