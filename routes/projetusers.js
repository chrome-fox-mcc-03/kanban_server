const express = require('express')
const router = express.Router()
const ProjectUserController = require('../controllers/projectuser')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', ProjectUserController.create)
router.post('/invite', ProjectUserController.invite)
router.get('/', ProjectUserController.findAll)
router.get('/:id', ProjectUserController.findOne)
router.delete('/:id', ProjectUserController.remove)
 
module.exports = router