const express = require('express')
const router = express.Router()
const authenticationProject = require('../middlewares/authenticationProject')
const ProjectController = require('../controllers/project')

// router.use(authenticationProject)
router.post('/', ProjectController.create )
router.get('/', ProjectController.findAll )
router.get('/:id', ProjectController.findOne)
router.put('/:id', ProjectController.update)
router.delete('/:id', ProjectController.remove)

module.exports= router