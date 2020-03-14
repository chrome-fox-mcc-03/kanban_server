const express = require('express')
const router = express.Router()
const users = require('./users')
const tasks = require('./tasks')
const categories = require('./categories')
const projects = require('./projects')
const projectusers = require('./projetusers')

router.use(users)
router.use('/projects', projects )
router.use('/projectusers', projectusers )
router.use('/categories', categories)
router.use('/tasks', tasks)

module.exports = router