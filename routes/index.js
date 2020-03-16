const express = require('express')
const router = express.Router()
const taskRouter = require('./task')
const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/google', userController.googleSignin)
router.use('/', taskRouter)

module.exports = router