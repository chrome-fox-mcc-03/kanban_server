const router = require('express').Router()
const MemmberController = require('../controllers/MemberController')

router.post('/', MemmberController.invite)

router.get('/:groupId', MemmberController.findUser)

router.delete('/:groupId', MemmberController.exit)

module.exports = router