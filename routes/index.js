const router = require("express").Router()
const taskRoute = require("./taskRoute.js")
const userRoute = require("./userRoute.js")

router.use("/users", userRoute)
router.use("/tasks", taskRoute)

module.exports = router