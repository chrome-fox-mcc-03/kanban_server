const router = require("express").Router();
const { TaskController } = require("../controllers");
const { authorization } = require("../middlewares/authorization");

router.get("/", TaskController.findAll);
router.post("/", TaskController.createNew);
router.put("/:id", authorization, TaskController.editTask);
router.delete("/:id", authorization, TaskController.deleteTask);
router.post("/:id/next", authorization, TaskController.nextCategory);
router.post("/:id/back", authorization, TaskController.backCategory);

module.exports = router;
