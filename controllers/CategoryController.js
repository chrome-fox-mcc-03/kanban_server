const { Category } = require('../models/index')

class CategoryController {
    static findAll(req, res, next) {
        Category.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
}



module.exports = CategoryController