const { Category } = require("../models");

class CategoryController {
  static getAllCategories(req, res, next) {
    Category.findAll()
      .then(response => {
        res.status(200).json({
          data: response,
          msg: "Successfully fetched all categories"
        });
      })
      .catch(next);
  }
}

module.exports = CategoryController;
