const router = require('express').Router();
const TaskController = require('../controller/task_controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);
router.post('/', TaskController.create);
router.get('/', TaskController.show);

router.delete('/:id', authorization, TaskController.delete);
router.patch('/next_category/:id', authorization, TaskController.nextCategory);
router.patch('/back/:id', authorization, TaskController.back);


module.exports = router;