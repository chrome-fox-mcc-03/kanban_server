const router = require('express').Router();
const Controller = require('../controllers/category');
const { authentication, categoryAuthorization } = require('../middlewares/auth');


router.use(authentication);
router.post('/', Controller.create);
router.get('/', Controller.findAll);
router.delete('/:id', categoryAuthorization ,Controller.deleteCategory);
router.put('/:id', categoryAuthorization ,Controller.update);

module.exports = router;