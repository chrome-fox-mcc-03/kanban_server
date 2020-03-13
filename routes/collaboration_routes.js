const router = require('express').Router()
const CollaborationController = require('../controllers/CollaborationController')

router.get('/:ProjectId', CollaborationController.findAll)
router.post('/', CollaborationController.create)
router.delete('/:id', CollaborationController.delete)

module.exports = router