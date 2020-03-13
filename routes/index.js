const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler')

const UserController = require('../controllers/UserController');

const itemRouter = require('./item');

const authenticator = require('../middlewares/authenticator')

router.get("/serverstatus", (req, res) => {
    res.status(200).json({message: "Should be online"})
})
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/cekLogin", UserController.cekLogin);

router.use(authenticator);
router.use("/item", itemRouter);

router.get("/prioritylist", UserController.getPriorities);
router.get("/userlist", UserController.getUsers);

router.use(errorHandler);

module.exports = router;