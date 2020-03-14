const { Category } = require('../models')

class CategoryController {
    static find (req, res, next) {
        Category
            .findAll()
            .then(categories => {
                res.status(200).json(categories)
            })
            .catch(next)
    }
}

module.exports = CategoryController