const router = require('express').Router()
const ControllerUser = require('../controllers/ControllerUser')
const authentication = require('../middleWares/authentication')
const routerTask = require('./task')

router.post('/signup', ControllerUser.signup)
router.post('/signin', ControllerUser.signin)
router.post('/signinGoogle', ControllerUser.loginGoogle)
router.use(authentication)
router.use('/task', routerTask)

module.exports = router