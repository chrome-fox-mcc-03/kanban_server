const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const authorization = require('../middlewares/authorization')

router.get('/', TaskController.findAll)
router.post('/', TaskController.create)
router.get('/:id', authorization, TaskController.findOne)
router.put('/:id', authorization, TaskController.update)
router.delete('/:id', authorization, TaskController.delete)
module.exports = router