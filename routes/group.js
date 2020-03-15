const router = require('express').Router()
const { createGroup, findAllGroup, inviteUser, deleteGroup } = require('../controllers/group')
const { isInvited, isMember } = require('../middlewares/authentication')

router.post('/', createGroup)
router.get('/', findAllGroup)
router.delete('/:id', isMember, deleteGroup)
router.post('/invite/:id', isInvited, inviteUser)


module.exports = router