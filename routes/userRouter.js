const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/users/register', userController.register)
router.post('/users/login', userController.login)

module.exports = router
