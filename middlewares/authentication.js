const { User } = require('../models')
const { verifyToken } = require('../helpers')

module.exports = {
  isLogin(req, res, next) {
    const { token } = req.headers
    const { email } = verifyToken(token)

    User.findOne({
      where: { email }
    })
      .then(data => {
        if(data) {
          req.decoded = data.dataValues
          next()
        } else {
          next({
            status: 401,
            message: 'You must login first'
          })
        }
      })
      .catch(next)
  },
  isMember(req, res, next) {

  }
}