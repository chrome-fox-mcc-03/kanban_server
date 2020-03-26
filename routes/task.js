const router = require('express').Router();
const Task = require('../controller/task')
const Authentication = require('../middleware/auth')

// router.use(Authentication.authenticationProject)
router.get('/board', Task.board)
router.get('/:pId', Task.findAll)
router.post('/:pId', Task.createTask)
router.patch('/:id', Task.patch)
router.delete('/:id', Task.destroy)


module.exports = router