const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = (req, res, next) => {
  if (!req.headers.access_token) {
    next({
      name : 'Please login first'
    })
  } else {
    try {
      let decoded = verifyToken(req.headers.access_token)
      User.findOne({
        where: {
          email: decoded.email
        }
      })
        .then(user => {
          if (user) {
            req.currentUserId = decoded.id
            req.currentName = decoded.name
            next()
          } else {
            next({
              name: 'Invalid token error'
            })
          }
        })
    } catch (err) {
      next({
        name: 'Invalid token error'
      })
    }
  }
}