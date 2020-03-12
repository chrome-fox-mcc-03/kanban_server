const express = require('express')
const router = express.Router()
const users = require('./users')
const tasks = require('./tasks')
const categories = require('./categories')

router.use(users)
router.use('/categories', categories)
router.use('/tasks', tasks)

module.exports = router