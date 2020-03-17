const express = require('express')
const router = express.Router()
const users = require('./user')
const teams = require('./team')
const tasks = require('./task')
const invite = require('./invite')
const categories = require('./categories')
const authentication = require('../middlewares/authentication')

router.use(users)
router.use(categories)

router.use(authentication)
router.use(teams)
router.use(invite)
//authorization
router.use(tasks)

module.exports = router