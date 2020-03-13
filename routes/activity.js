const router = require('express').Router();
const ActivityController = require('../controllers/activity');
const authorization = require('../middlewares/authorization');

router.post('/', ActivityController.addActivity);
router.get('/', ActivityController.fetchActivities);
router.delete('/:id', authorization, ActivityController.delete);
router.get('/:id', authorization, ActivityController.getById);
router.patch('/:id', authorization, ActivityController.move);

module.exports = router;