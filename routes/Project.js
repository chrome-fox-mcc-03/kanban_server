const ProjectRoute = require('express').Router()
const Controller = require('../controller/controller')
const UserController = require('../controller/usercontroller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

ProjectRoute.get('/', authentication, Controller.findProject)
ProjectRoute.post('/project', authentication, Controller.GenerateProject)
ProjectRoute.post('/project/create', authentication, Controller.createProject)
ProjectRoute.post('/project/task/create', authentication, Controller.createTask)
ProjectRoute.delete('/project/task/delete/:id', authentication, Controller.deleteTask)
ProjectRoute.put('/project/task/update/:id', authentication, Controller.updateTask)
ProjectRoute.post('/project/addfriend', authentication, Controller.addUser)


module.exports = ProjectRoute