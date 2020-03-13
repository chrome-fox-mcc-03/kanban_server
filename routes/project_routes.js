const router = require('express').Router()
const ProjectController = require('../controllers/ProjectController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', ProjectController.create)
router.get('/', ProjectController.findAll)
router.get('/:id', ProjectController.findOne)
router.delete('/:id', ProjectController.delete)


module.exports = router