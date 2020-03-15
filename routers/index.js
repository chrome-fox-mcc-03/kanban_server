const router = require('express').Router();
const UserController = require('../controllers/UserController')
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')


router.get('/', (req, res) => res.send("masuk router"));
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)
router.post('/register', UserController.register)

router.use(authentication);
router.post('/task', TaskController.create)
router.get('/task', TaskController.findAll)
router.delete('/task/:id', authorization, TaskController.delete)
router.put('/task/:id', authorization, TaskController.update)


module.exports = router