const router = require('express').Router();
const Controller = require('../controllers');

router.post('/register', Controller.UserController.register);
router.post('/login', Controller.UserController.login);
router.post('/googleSignIn', Controller.UserController.googleSignIn);


module.exports = router;