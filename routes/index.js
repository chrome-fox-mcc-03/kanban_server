const router = require('express').Router()
const { UserController } = require('../controllers/userController')
const { TaskController } = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', (req, res, next) => {
    res.status(200).json({
        info : 'you are connected to the server'
    })
})

//User
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.post('/loginGoogle', UserController.loginGoogle)

// edit, delete


//Task
// router.use(authentication)
router.get('/task', authentication ,TaskController.fetchTask)
router.post('/task', authentication ,TaskController.createTask)
// router.use(authorization)
router.delete('/task/:id', authentication, authorization, TaskController.deleteTask)
router.put('/task/:id', authentication, authorization, TaskController.editTask)




module.exports = router