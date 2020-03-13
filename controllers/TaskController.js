const { Task, Category, User } = require("../models");

class TaskController {
  static findAll(req, res, next) {
    Task.findAll({
      include: [Category, User]
    })
      .then(allData => {
        res.status(200).json({
          data: allData,
          msg: "Successfully fetched all data"
        });
      })
      .catch(next);
  }

  static createNew(req, res, next) {
    let { title, description, CategoryId } = req.body;
    Task.create({
      title,
      description,
      CategoryId,
      UserId: req.decoded.id
    })
      .then(newTask => {
        res.status(201).json({
          data: newTask,
          msg: "Successfully created a new task"
        });
      })
      .catch(next);
  }

  static editTask(req, res, next) {
    let { title, description } = req.body;
    Task.update(
      {
        title,
        description
      },
      {
        where: {
          id: req.params.id
        },
        returning: true
      }
    )
      .then(updated => {
        res.status(200).json({
          data: updated,
          msg: "Successfully updated a task"
        });
      })
      .catch(next);
  }

  static deleteTask(req, res, next) {
    Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(deleted => {
        res.status(200).json({
          msg: "Successfully deleted a Task"
        });
      })
      .catch(next);
  }

  static nextCategory(req, res, next) {
    // search for the id based on req.params.id
    let allowed = false;
    Task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(response => {
        if (response.CategoryId < 4) {
          allowed = true;
          return response.update(
            {
              CategoryId: response.CategoryId + 1
            },
            {
              returning: true
            }
          );
        } else {
          return response;
        }
      })
      .then(response => {
        if (allowed) {
          res.status(200).json({
            msg: `Task successfully moved into category ${response.CategoryId}`
          });
        } else {
          next({
            status: 400,
            msg: "Task already reached the end"
          });
        }
      })
      .catch(next);
  }

  static backCategory(req, res, next) {
    // search for the id based on req.params.id
    let allowed = false;
    Task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(response => {
        if (response.CategoryId > 1 && response.CategoryId < 4) {
          allowed = true;
          return response.update(
            {
              CategoryId: response.CategoryId - 1
            },
            {
              returning: true
            }
          );
        } else {
          return response;
        }
      })
      .then(response => {
        if (allowed) {
          res.status(200).json({
            msg: `Task successfully moved into category ${response.CategoryId}`
          });
        } else {
          if (response.CategoryId === 4) {
            next({
              status: 400,
              msg:
                "Task cannot be moved from when it is already in Done category"
            });
          } else {
            next({
              status: 400,
              msg: "Task is already at the very start"
            });
          }
        }
      })
      .catch(next);
  }
}

module.exports = TaskController;
