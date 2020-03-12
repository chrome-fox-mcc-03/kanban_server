const router = require('express').Router();
const CardController = require('../controllers/card');
const { cardAuthorization } = require('../middlewares/authorization');

router.use('/:id(\\d+)', cardAuthorization);

router.post('/', CardController.create);
router.put('/:id(\\d+)', CardController.update);
router.put('/:id(\\d+)/:status', CardController.move);
router.delete('/:id(\\d+)', CardController.delete);

module.exports = router;