const router = require('express').Router()
const Controller = require('../controller/controller')
const UserRoute = require("../routes/user")
const ProjectRoute = require('./Project')

router.use("/user", UserRoute)
router.use('/', ProjectRoute)
module.exports = router