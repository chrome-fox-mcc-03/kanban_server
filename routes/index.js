const router = require('express').Router();
const userRouter = require('./user_router');
const taskRouter = require('./task_router')

router.use('/users', userRouter);
router.use('/tasks', taskRouter);

module.exports = router;