const router = require('express').Router()
const Task = require('../controllers/task')
const User = require('../controllers/user')
const Category = require('../controllers/category')
const Authentication = require('../middlewares/authentication')
const Authorization = require('../middlewares/authorization')

router.post('/register', User.register)
router.post('/login', User.login)

router.use(Authentication)

router.get('/task', Task.findAll)
router.post('/task', Task.create)
router.get('/task/category', Category.fetch)
router.get('/task/:id', Task.findOne)

router.put('/task/:id', Authorization, Task.update)
router.patch('/task/:id', Authorization, Task.categoryUpdate)
router.delete('/task/:id', Authorization, Task.destroy)

module.exports = router