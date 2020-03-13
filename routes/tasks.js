const express = require('express')
const router = express.Router()
const authenticationProject = require('../middlewares/authenticationProject')
const authorization = require('../middlewares/authorization')
const TaskControllers = require('../controllers/task')

router.use(authenticationProject)
router.post('/', TaskControllers.create)
router.get('/', TaskControllers.findAll)
router.get('/:id', authorization, TaskControllers.findOne)
router.put('/:id', authorization ,TaskControllers.update)
router.delete('/:id', authorization,TaskControllers.remove)

module.exports = router