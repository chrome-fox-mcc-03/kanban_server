const router = require("express").Router();
const { CategoryController } = require("../controllers");

router.get("/", CategoryController.getAllCategories);

module.exports = router;
