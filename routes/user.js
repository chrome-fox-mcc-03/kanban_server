const router = require('express').Router()
const { register, login, gLogin } = require('../controllers/user')

router.post('/register', register)
router.post('/login', login)
router.post('/glogin', gLogin)

module.exports = router