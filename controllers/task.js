const { Task } = require('../models');

class Controller {
  static async create(req, res, next) {
    try {
      const { title, CategoryId } = req.body;
      if (!CategoryId) next({
        status: 400,
        name: 'Bad Request',
        message: 'CategoryId should be filled',
      });
      const newTask = await Task.create({
        title,
        CategoryId,
        UserId: req.decoded.id,
      });
      res.status(201).json(newTask);
    
    } catch (err) {
      next(err);
    }
  }

  static async findAll(req, res, next) {
    try {
      const tasks = await Task.findAll({
        where: {
          CategoryId: req.body.CategoryId,
          UserId: req.decoded.id,
        }
      });
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }

  static async deleteTask(req, res, next) {
    try {
      await Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: `Success deleting task ${req.params.id}`
      })
    } catch (err) {
      next(err);
    }
  }

  static async updateTask(req, res, next) {
    try {
      const { title } = req.body;
      const task = await Task.update({
        title
      }, {
        where: {
          id: req.params.id,
        },
        returning: true,
      })
      res.status(200).json(task[1][0]);
    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = Controller;