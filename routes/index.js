const router = require('express').Router()

const users = require('./users')
const projects = require('./projects')
const members = require('./members')
const tasks = require('./tasks')
const categories = require('./categories')

router.use('/', users)
router.use('/projects', projects)
router.use('/members', members)
router.use('/tasks', tasks)
router.use('/categories', categories)

module.exports = router