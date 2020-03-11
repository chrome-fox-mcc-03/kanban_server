const router = require('express').Router()
const userRouter = require('../routes/userRouter')


router.get('/', (req, res) => {
    res.send('from router')
})

router.use(userRouter)

module.exports = router