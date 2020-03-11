const router = require('express').Router()
const { createTask, findAllTask, updateTask, deleteTask } = require('../controllers/task')

router.post('/', createTask)
router.get('/', findAllTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router