const router = require('express').Router()
const user = require('./user')
const task = require('./task')
const group = require('./group')

router.use('/', user)
router.use('/group', group)
router.use('/task', task)

module.exports = router