const router = require('express').Router()
const ControllerUser = require('./../controllers/controllerUser')

router.get('/', ControllerUser.getUsers)

router.get('/:id', ControllerUser.getById)
router.put('/:id', ControllerUser.update)
router.delete('/:id', ControllerUser.delete)

module.exports = router