const router = require('express').Router()
const CollaborationController = require('../controllers/CollaborationController')

router.get('/:ProjectId', CollaborationController.findAll)
router.post('/', CollaborationController.create)
router.delete('/', CollaborationController.delete)

module.exports = router