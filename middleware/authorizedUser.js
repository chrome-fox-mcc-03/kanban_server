const { Kanban } = require('../models')

module.exports = (req, res, next) => {
  Kanban.findOne(
    {
      where : {
        UserId : req.currentId
      }
    }
  )
    .then(data => {
      console.log(data)
      if(data) {
        next()
      }
    })
    .catch(err => {
      console.log(err)
    })
}