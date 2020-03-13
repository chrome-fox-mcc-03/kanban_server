const router = require('express').Router();
const ControllerTask = require('../controllers/task');
const authentication = require('../middlewares/authentication');
const authorization  = require('../middlewares/authorization');

router.use(authentication)

router.post('/', ControllerTask.create)

router.get('/', ControllerTask.findAll)

router.get('/:id', ControllerTask.findOne)

router.put('/:id', authorization, ControllerTask.update)

router.delete('/:id', authorization, ControllerTask.destroy)

module.exports = router