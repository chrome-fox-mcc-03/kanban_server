const router = require('express').Router()
const user = require('./user')
const task = require('./task')
const group = require('./group')
const category = require('./category')
const { isLogin, isMember } = require('../middlewares/authentication')

router.use('/', user)
router.use('/category', category)
router.use(isLogin)
router.use('/group', group)
router.use(isMember)
router.use('/task', task)

module.exports = router