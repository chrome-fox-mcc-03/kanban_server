const { kanban } = require('../models')

module.exports = (req, res, next) => {
  kanban.findOne({
    UserId : req.currentTeam
  })
    .then(data => {
      if(data){
        next()
      }else{
        throw {
          name: "costume",
          status : 400,
          message: "You don't have authorized"
        }
      }
    })
    .catch(err => {
      next(err)
    })
}