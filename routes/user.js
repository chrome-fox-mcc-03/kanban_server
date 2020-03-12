const UserRoute = require('express').Router()
const Controller = require('../controller/controller')
const UserController = require('../controller/usercontroller')

UserRoute.post('/register', UserController.Register )
UserRoute.post('/login', UserController.Login)
UserRoute.post('/googlelogin', UserController.GoogleLogin)

module.exports = UserRoute