const router = require('express').Router()
const { createTask, findAllTask, updateTask, deleteTask, findOneTask } = require('../controllers/task')
const { task } = require('../middlewares/authorized')

router.post('/', createTask)
router.get('/', findAllTask)
router.get('/:id', findOneTask)
router.put('/:id', task, updateTask)
router.delete('/:id', task, deleteTask)

module.exports = router