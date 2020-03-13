const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const { groupAuth, authorization } = require('../middlewares/auth')

router.use(groupAuth)

router.get('/', TaskController.findAll)

router.post('/', TaskController.create)

router.get('/:id', TaskController.findByPk)

router.put('/:id/edit', authorization, TaskController.edit)

router.patch('/:id/category', authorization, TaskController.edit)

router.delete('/:id/delete', authorization, TaskController.delete)

module.exports = router