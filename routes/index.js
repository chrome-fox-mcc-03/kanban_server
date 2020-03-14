const express = require('express').Router()
const router = express
const user = require('./user')
const kanban = require('./Kanban')

router.use(kanban)
router.use(user)


module.exports = router