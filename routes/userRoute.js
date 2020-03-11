const userRoute = require("express").Router()
// const UserController = require("../controllers/userController.js")


userRoute.post("/signup", UserController.signup) 
userRoute.post("/login", UserController.login)
// userRoute.post("/googleLogin", UserController.googleLogin)


module.exports = userRoute