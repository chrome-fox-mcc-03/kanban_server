const router = require('express').Router();
const task = require('./task')
const User = require('../controller/user')
const Authentication = require('../middleware/auth')

router.post('/register', User.register)
router.post('/login', User.login)
router.post('/google', User.signIn)

router.use(Authentication.authenticationUser)
router.post('/addproject', User.addProject)
router.get('/project', User.findProject)
router.get('/joinedmember/:ProjectId', User.joinedMember)
router.get('/member', User.member)
router.post('/member', User.joinProject)
router.delete('/member', User.remove)
router.use(task)

module.exports = router