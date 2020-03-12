const router = require('express').Router();
const ActivityController = require('../controllers/activity');

router.post('/', ActivityController.addActivity);
router.get('/', ActivityController.fetchActivities);
router.delete('/:id', ActivityController.delete);
router.patch('/:id', ActivityController.move);

module.exports = router;