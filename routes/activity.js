const router = require('express').Router();
const ActivityController = require('../controllers/activity');

router.post('/', ActivityController.addActivity);

module.exports = router;