const { UserTeam } = require('../models')

module.exports = (req, res, next) => {
  UserTeam.findOne({
    where : {
      UserId: req.currentUserId,
      TeamId: req.params.teamId
    }
  })
    .then(data => {
      console.log(data, '>>>>>>>>>>>>>>>>')
      if (data) {
        console.log('MASUK >>>>>>>>>>>>')
        req.currentTeamId = data.TeamId
        next()
      } else {
        console.log('ERRORORORORO')
        next({
          name: 'Not Authorized'
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}