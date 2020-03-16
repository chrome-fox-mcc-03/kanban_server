const router = require('express').Router()
const ProjectController = require('../controllers/ProjectController')
const authentication = require('../middlewares/authentication')
const { ProjectAuthorization } = require('../middlewares/authorization')


router.use(authentication)
router.post('/', ProjectController.create)
router.get('/', ProjectController.findAll)
router.get('/:id', ProjectAuthorization, ProjectController.findOne)
router.delete('/:id', ProjectAuthorization, ProjectController.delete)


module.exports = router