const express = require('express')
const router = express.Router()
const InviteController = require('../controllers/inviteController')

router.post('/invite/:teamId', InviteController.invite)
router.get('/members/:teamId', InviteController.getAllMember)

module.exports = router