const { Task } = require('../models')

function authorization(req, res, next) {
  Task.findOne({
    where: {
      UserId: req.currentUserId
    }
  })
  .then((task) => {
    if(task) {
      next()
    } else {
      res.status(401).json({ message: `Not authorized`})
    }
  })
  .catch((err) => {
    res.status(401).json({ message: `Not authorized`})
  })
}

module.exports = authorization