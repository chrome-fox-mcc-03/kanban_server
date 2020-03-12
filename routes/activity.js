const router = require('express').Router();
const ActivityController = require('../controllers/activity');

router.post('/', ActivityController.addActivity);
router.get('/', ActivityController.fetchActivities);
router.delete('/:id', ActivityController.delete);

module.exports = router;