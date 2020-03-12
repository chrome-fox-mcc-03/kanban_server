const router = require('express').Router()
const { createTask, findAllTask, updateTask, deleteTask } = require('../controllers/task')
const authorized = require('../middlewares/authorized')

router.post('/', createTask)
router.get('/', findAllTask)
router.put('/:id', authorized, updateTask)
router.delete('/:id', authorized, deleteTask)

module.exports = router