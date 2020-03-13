const express = require('express').Router()
const router = express
const user = require('./user')
const kanban = require('./Kanban')

router.use(user)
router.use(kanban)


module.exports = router