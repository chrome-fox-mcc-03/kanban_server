const userController = require('../controllers/userController')
const todoController = require('../controllers/todoController')
const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', userController.register)
router.post('/login', userController.login)
// router.post('/googleSignIn', userController.googleSignIn)

router.use('/todo', authentication)
router.post('/todo/create', todoController.create)
router.get('/todo/read', todoController.read)
router.put('/todo/update/:id', authorization, todoController.update)
router.delete('/todo/delete/:id', authorization, todoController.delete)

module.exports = router