const router = require('express').Router()
const ProjectController = require('../controllers/ProjectController')

router.get('/', ProjectController.findAll)

router.post('/create', ProjectController.create)

router.get('/:id', ProjectController.findByPk)

module.exports = router