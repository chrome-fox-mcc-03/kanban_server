const router = require('express').Router()
const userRouter = require('../routes/userRouter')
const taskRouter = require('../routes/taskRouter')
const authentication = require('../middlewares/authentication')
const errorsHandler = require('../middlewares/errorsHandler')


router.use('/users', userRouter)

router.use(authentication)
router.use('/tasks', taskRouter)

router.use(errorsHandler)

module.exports = router