const router = require('express').Router();
const CardController = require('../controllers/card');
const { cardAuthorization } = require('../middlewares/authorization');

router.post('/', CardController.create);

router.use('/:id(\\d+)', cardAuthorization);

router.put('/:id(\\d+)', CardController.update);
router.delete('/:id(\\d+)', CardController.delete);

module.exports = router;