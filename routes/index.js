const router = require('express').Router()
const routerTask = require('./routesTask')
const routerUser = require('./routesUser')
const Controller = require('./../controllers/controller')
const ControllerUser = require('./../controllers/controllerUser')
const { authentication } = require('./../middlewares/authentication')
const { adminAuth } = require('./../middlewares/authentication')

router.post('/users', ControllerUser.addUser)
router.post('/login', Controller.login)
router.use(authentication)
router.use('/tasks', routerTask)
router.use(adminAuth)
router.use('/users', routerUser)

module.exports = router