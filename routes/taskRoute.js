const taskRoute = require("express").Router()
const authentication = require("../middleware/authentication.js")
const authorization = require("../middleware/authorization.js")
// const TaskController = require("../controllers/taskController.js")


taskRoute.use(authentication)
taskRoute.post("/", TaskController.create)
taskRoute.get("/", TaskController.getAll)
taskRoute.get("/:id", TaskController.getById)

taskRoute.use(authorization)
taskRoute.put("/:id", TaskController.update)
taskRoute.delete("/:id", TaskController.delete)

// taskRoute.post("/assign/:userId", TaskController.assign)
// taskRoute.delete("/discharge/:userId", TaskController.discharge)


module.exports = taskRoute