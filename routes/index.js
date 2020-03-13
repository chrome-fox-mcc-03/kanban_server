const router = require('express').Router()

const users = require('./users')
const projects = require('./projects')
const members = require('./members')
const tasks = require('./tasks')
const categories = require('./categories')
const { userAuth } = require('../middlewares/auth')

router.use('/', users)
router.use('/categories', categories)
router.use(userAuth)
router.use('/projects', projects)
router.use('/members', members)
router.use('/tasks', tasks)

module.exports = router