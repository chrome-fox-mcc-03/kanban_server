const router = require('express').Router()
const { UserController } = require('../controllers/userController')
const { TaskController } = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')

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
router.use(authentication)
router.get('/task', TaskController.fetchTask)
router.post('/task', TaskController.createTask)
router.delete('/task/:id', TaskController.deleteTask)
router.put('/task/:id', TaskController.editTask)




module.exports = router