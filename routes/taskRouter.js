const router = require('express').Router()
const controller = require('../controllers/taskController')
const authorization = require('../middlewares/authorization')

router.get('/', controller.getTasks)
router.post('/add', controller.addTask)
router.put('/update/:id', authorization, controller.update)
router.delete('/delete/:id', authorization, controller.delete)

module.exports = router