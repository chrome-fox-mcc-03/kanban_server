const express = require('express').Router
const router = express()
const ControllerUser = require('../controller/controllerUser')

router.post('/register',ControllerUser.register)
router.post('/login',ControllerUser.login)
router.get('/loginGoogle',ControllerUser.loginGoogle)


module.exports = router