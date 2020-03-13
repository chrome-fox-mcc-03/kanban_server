const router = require('express').Router();
const activitiesRoutes = require('../routes/activity');
const UserController = require('../controllers/user');
const authentication = require('../middlewares/authentication');

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.post('/googleSignIn', UserController.googleSignIn);

router.use(authentication);

router.use('/activities', activitiesRoutes);

module.exports = router;