const { User, Group, GroupUser } = require('../models')
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
    const { id } = req.decoded

    GroupUser.findOne({
      where: {
        
      }
    })
  },
  isInvited(req, res, next) {
    const { id } = req.params
    const { email } = req.body
    let UserId = ''
    let GroupId = ''

    User.findOne({
      where: { email }
    })
      .then(data => {
        if(data) {
          UserId = data.id
          return Group.findOne({
            where: { id }
          })
        } else {
          throw {
            status: 404,
            message: 'User Not Found'
          }
        }
      })
      .then(data => {
        if(data) {
          GroupId = data.id
          return GroupUser.findOne({
            where: {
              GroupId,
              UserId
            }
          })
        } else {
          throw {
            status: 404,
            message: 'Group Not Found'
          }
        }
      })
      .then(data => {
        if(data) {
          next({
            status: 400,
            message: 'User already in group'
          })
        } else {
          next()
        }
      })
      .catch(next)
  }
}