const router = require('express').Router();

const ItemController = require('../controllers/ItemController');
const authorizator = require('../middlewares/authorizator');

router.get("/", ItemController.findMyItems);
router.post("/", ItemController.create);
router.put("/:id", authorizator, ItemController.updateItem);
router.delete("/:id", authorizator, ItemController.deleteMyItem)

module.exports = router;