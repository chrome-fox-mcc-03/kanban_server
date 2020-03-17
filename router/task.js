const router = require('express').Router();
const Controller = require('../controllers/task');
const { authentication, taskAuthorization } = require('../middlewares/auth');


router.use(authentication);
router.post('/', Controller.create);
router.get('/', Controller.findAll);
router.delete('/:id', taskAuthorization, Controller.deleteTask);
router.put('/:id', taskAuthorization, Controller.updateTask);

module.exports = router;