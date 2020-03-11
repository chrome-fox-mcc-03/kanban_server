const router = require("express").Router();
const { UserController } = require("../controllers");

router.use("/register", UserController.register);

module.exports = router;
