const router = require('express').Router()
const userRouter = require('../routes/userRouter')
const taskRouter = require('../routes/taskRouter')


router.get('/', (req, res) => {
    res.send('from router')
})

router.use('/users', userRouter)
router.use('/tasks', taskRouter)

module.exports = router