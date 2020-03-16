const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const authentication = require('../middlewere/authentication')
const authorization = require('../middlewere/authorization')

router.use(authentication)
router.post('/task', taskController.create)
router.get('/task', taskController.display)
router.patch('/task/:id', authorization, taskController.edit)
router.delete('/task/:id', authorization, taskController.delete)

module.exports = router