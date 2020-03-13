const router = require('express').Router()
const ControllerTask = require('../controllers/ControllerTask')
const authorization = require('../middleWares/authorization')

router.get('/', ControllerTask.findAll)
router.post('/', ControllerTask.create)
router.get('/:id', ControllerTask.findOne)
router.patch('/:id', authorization, ControllerTask.update)
router.delete('/:id', authorization, ControllerTask.deleteTask)

module.exports = router