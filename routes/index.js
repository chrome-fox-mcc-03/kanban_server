const router = require('express').Router();
const UserController = require('../controllers/user');
const projectRouter = require('../routes/project');
const userRouter = require('../routes/user');
const cardRouter = require('../routes/card');
const { errorHandler } = require('../middlewares/errorHandler');
const { authentication } = require('../middlewares/authentication');

router.post('/login', UserController.login);
router.post('/register', UserController.register);

router.use(authentication);

router.use('/users', userRouter)
router.use('/projects', projectRouter);
router.use('/cards', cardRouter)

router.use(errorHandler);

module.exports = router;