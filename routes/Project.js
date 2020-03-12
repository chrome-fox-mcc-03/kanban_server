const ProjectRoute = require('express').Router()
const Controller = require('../controller/controller')
const UserController = require('../controller/usercontroller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

ProjectRoute.get('/', authentication, Controller.findProject)
ProjectRoute.post('/project', authentication, Controller.GenerateProject)

ProjectRoute.post('/project/create', authentication, Controller.createProject)


module.exports = ProjectRoute