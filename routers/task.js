const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')
const authorization = require('../middlewares/authorization')

router.get('/:teamId/tasks', authorization, TaskController.getAllTaskEachCategory)
router.post('/:teamId/tasks', authorization, TaskController.createTask)
router.get('/:teamId/tasks/:taskId', authorization, TaskController.getTaskInCategory)
router.put('/:teamId/tasks/:taskId', authorization, TaskController.editTask)
router.delete('/:teamId/tasks/:taskId', authorization, TaskController.deleteTask)

module.exports = router