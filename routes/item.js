const router = require('express').Router();

const ItemController = require('../controllers/ItemController');

router.get("/", ItemController.findMyItems);
router.post("/", ItemController.create);

module.exports = router;