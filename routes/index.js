const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const UserC = require('../controllers/UserC');
const TaskC = require('../controllers/TaskC');


router.get('/', function (req, res) {
	res.send('hello world')
})

router.post('/login', UserC.login)
router.post('/loginGoogle', UserC.loginGoogle)
router.post('/register', UserC.register)

router.use(authentication)

router.get('/tasks', TaskC.get)
router.post('/tasks', TaskC.create)
router.get('/tasks/:id', authorization, TaskC.getById)
router.put('/tasks/:id', authorization, TaskC.update)
router.delete('/tasks/:id', authorization, TaskC.delete)

module.exports = router;
