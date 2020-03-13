"use strict"

const router = require('express').Router()
const taskController = require('../controller/taskController')
const {
    checkTaskBoardAdd,
    checkTaskBoardDelete
} = require('../middleware/authorization')

router.post('/:boardId', checkTaskBoardAdd, taskController.createTask)
router.put('/:id', taskController.editTask)
router.put('/status/:id', taskController.updateStatus)
router.delete('/:id', checkTaskBoardDelete ,taskController.deleteTask)
router.get('/:boardId', taskController.showTask)

module.exports = router