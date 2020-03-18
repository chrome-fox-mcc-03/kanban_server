const express = require('express').Router
const router = express()
const authentication = require('../middleware/authentication')
const authorizedUser =require('../middleware/authorizedUser')
const ControllerKanban =require('../controller/controllerKanban')

router.use(authentication)
router.get('/',ControllerKanban.findAlluserKanban)
router.post('/kanban',ControllerKanban.addKanban)
router.get('/kanban/:id',authorizedUser,ControllerKanban.findOne)
router.delete('/kanban/:id',authorizedUser,ControllerKanban.delete)
router.put('/kanban/:id',authorizedUser,ControllerKanban.updated)
router.patch('/kanban/:id',authorizedUser,ControllerKanban.updateStatus)

module.exports = router