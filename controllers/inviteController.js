const { User, UserTeam } = require('../models')

class InviteController {
  static invite (req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          next({
            name: 'User with this email is not registered'
          })
        } else {
          let payload = {
            UserId: user.id,
            TeamId: req.params.teamId
          }
          return UserTeam.create(payload)
        }
      })
      .then(userTeam => {
        res.status(201).json(userTeam)
      })
      .catch(next)
  }

  static getAllMember (req, res, next) {
    UserTeam.findAll({
      where: {
        TeamId: req.params.teamId
      },
      include : [{
        model : User
      }]
    })
      .then(members => {
        res.status(200).json(members)
      })
      .catch(next)
  }
}

module.exports = InviteController