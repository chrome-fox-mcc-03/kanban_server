const router = require('express').Router()
const TaskRoute = require('./task')
const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentification')
router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authentication)

router.use('/tasks', TaskRoute)

module.exports = router