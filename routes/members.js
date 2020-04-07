const router = require('express').Router()
const MemmberController = require('../controllers/MemberController')

router.post('/', MemmberController.invite)

router.get('/:projectId', MemmberController.findUser)

router.delete('/:projectId', MemmberController.exit)

module.exports = router