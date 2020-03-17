const { Category, Task } = require('../models');

class Controller {
  static async create(req, res, next) {
    try {
      const { name } = req.body;
      const newCategory = await Category.create({
        name,
        UserId: req.decoded.id,
      });

      const payload = {
        id: newCategory.id,
        name: newCategory.name,
        UserId: newCategory.UserId,
        Tasks: []
      };

      res.status(201).json(payload);
    } catch (err) {
      next(err);
    }
  }

  static async findAll(req, res, next) {
    try {
      const categories = await Category.findAll({
        where: {
          UserId: req.decoded.id,
        },
        include: [{
          model: Task,
          attributes: ['id', 'title', 'CategoryId']
        }]
      });

     res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      await Task.destroy({
        where: {
          CategoryId: req.params.id,
        }
      })

     await Category.destroy({
       where: {
         id: req.params.id,
       },
     });

     res.status(200).json({
       message: 'Category deleted'
     })
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { name } = req.body;
      const category = await Category.update({
        name
      }, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });

      res.status(200).json(category[1][0]);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;