const router = require("express").Router();
const usersRouter = require("./users");
const tasksRouter = require("./tasks");
const { authentification } = require("../middlewares/authentification");

router.use("/", usersRouter);
router.use(authentification);
router.use("/tasks", tasksRouter);

module.exports = router;
