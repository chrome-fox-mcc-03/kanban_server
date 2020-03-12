const router = require('express').Router()
const { createGroup, findAllGroup, inviteUser } = require('../controllers/group')
const { isInvited } = require('../middlewares/authentication')

router.post('/', createGroup)
router.get('/', findAllGroup)
router.post('/invite/:id', isInvited, inviteUser)

module.exports = router