const taskRoute = require("express").Router()
const authentication = require("../middleware/authentication.js")
const authorization = require("../middleware/authorization.js")
const TaskController = require("../controllers/taskController.js")


taskRoute.use(authentication)
taskRoute.get("/", TaskController.getAll)
taskRoute.post("/", TaskController.create)
taskRoute.get("/:id", TaskController.getById)

taskRoute.put("/:id", authorization, TaskController.update)
taskRoute.delete("/:id", authorization, TaskController.delete)

// taskRoute.post("/assign/:userId", TaskController.assign)
// taskRoute.delete("/discharge/:userId", TaskController.discharge)


module.exports = taskRoute