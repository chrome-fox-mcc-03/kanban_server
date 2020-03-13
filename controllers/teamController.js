const { Team, UserTeam } = require('../models')

class TeamController {
  static getAllTeamsBasedOnUserId (req, res, next) {
    UserTeam.findAll({
      where: {
        UserId: req.currentUserId
      },
      include : [{
        model : Team
      }]
    })
      .then(teams => {
        res.status(200).json(teams)
      })
      .catch(next)
  }

  static createNewTeam (req, res, next) {
    let payload = {
      name : req.body.name
    }
    Team.create(payload)
      .then(team => {
        let payload = {
          TeamId : team.id,
          UserId : req.currentUserId
        }
        return UserTeam.create(payload)
      })
      .then(data => {
        res.status(201).json({
          message: 'Create Team is successfully',
          data
        })
      })
      .catch(next)
  }
}

module.exports = TeamController