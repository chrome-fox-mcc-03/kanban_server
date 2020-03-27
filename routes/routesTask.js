const router = require('express').Router()
const ControllerTask = require('./../controllers/controllerTask')
const { taskAuthorization } = require('./../middlewares/authorization')


router.get('/', ControllerTask.getTasks)
router.post('/', ControllerTask.addTask)
router.get('/:id', taskAuthorization, ControllerTask.getById)
router.put('/:id', taskAuthorization,ControllerTask.update)
router.delete('/:id', taskAuthorization,ControllerTask.delete)

module.exports = router