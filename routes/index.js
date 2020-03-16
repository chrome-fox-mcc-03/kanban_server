const router = require('express').Router();
const task = require('./task');
const user = require('./user');

router.use(user)

router.use("/tasks", task)

module.exports = router