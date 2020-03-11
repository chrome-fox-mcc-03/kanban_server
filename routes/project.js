const router = require('express').Router();
const ProjectController = require('../controllers/project');
const ProjectUserController = require('../controllers/projectUser');
const { projectAuthorization } = require('../middlewares/authorization');

router.post('/', ProjectController.create);

router.use('/:id(\\d+)', projectAuthorization);

router.put('/:id(\\d+)', ProjectController.update);
router.put('/:id(\\d+)/leader/:projectLeader', ProjectController.setLeader);
router.delete('/:id(\\d+)', ProjectController.delete);

router.post('/:id(\\d+)/participants/:UserId', ProjectUserController.invite);
router.delete('/:id(\\d+)/participants/:UserId', ProjectUserController.remove);

module.exports = router;