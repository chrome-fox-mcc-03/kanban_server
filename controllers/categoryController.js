const { Category, Board } = require('../models')

class CategoryController {
  static getAllCategoriesInBoard (req, res, next) {
    Category.findAll()
      .then(categories => {
        res.status(200).json(categories)
      })
      .catch(next)
  }

}

module.exports = CategoryController