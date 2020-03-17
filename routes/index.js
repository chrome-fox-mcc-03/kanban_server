const router = require('express').Router()
const user_routes = require('./user_routes')
const project_routes = require('./project_routes')
const task_routes = require('./task_routes')
const collaboration_routes = require('./collaboration_routes')
const category_routes = require('./category_routes')

router.use('/users',user_routes)
router.use('/projects',project_routes)
router.use('/tasks',task_routes)
router.use('/collaborations', collaboration_routes)
router.use('/categories', category_routes)

module.exports = router