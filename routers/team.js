const express = require('express')
const router = express.Router()
const TeamController = require('../controllers/teamController')

router.get('/teams', TeamController.getAllTeamsBasedOnUserId)
router.post('/teams', TeamController.createNewTeam)

module.exports = router