const router = require('express').Router()
const { createGroup, findAllGroup, inviteUser } = require('../controllers/group')

router.post('/', createGroup)
router.get('/', findAllGroup)
router.post('/invite', inviteUser)

module.exports = router