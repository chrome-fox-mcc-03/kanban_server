"use strict"

"use strict"

const router = require('express').Router()
const boardRouter = require('./boardRouter')
const taskRouter = require('./taskRouter')
const userController = require('../controller/userController')
const auth = require('../middleware/authentication')

router.post('/signin', userController.signIn)
router.post('/signup', userController.signUp)

router.use(auth)
router.use('/board', boardRouter)
router.use('/task', taskRouter)

module.exports = user