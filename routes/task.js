const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const authorization = require('../middlewares/authorization')

router.get('/', TaskController.findAll)
router.use(authorization)
router.get('/:id', TaskController.findOne)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.delete)
module.exports = router