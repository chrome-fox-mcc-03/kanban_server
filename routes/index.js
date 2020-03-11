const router = require('express').Router();
const activitiesRoutes = require('../routes/activity');
const UserController = require('../controllers/user');
const authentication = require('../middlewares/authentication');

router.post('/signup', UserController.signup);
// router.post('/signup', function(req, res, next) {
//     console.log(req.body)
//     UserController.signup(req, res, next)
// })
router.post('/signin', UserController.signin);

router.use(authentication);

router.use('/activities', activitiesRoutes);

module.exports = router;