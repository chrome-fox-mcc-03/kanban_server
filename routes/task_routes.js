const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', TaskController.findAll)
router.post('/', TaskController.create)
router.get('/:id', TaskController.findOne)
router.put('/:id', TaskController.update)
router.patch('/:id', TaskController.changeCategory)
router.delete('/:id', TaskController.delete)


module.exports = router