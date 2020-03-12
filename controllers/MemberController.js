const { Member, User } = require('../models')
const { Op } = require('sequelize')

module.exports = 
  class MemberController {
    static invite (req, res, next) {
      const { UserId, PorjectId } = req.body
      Member.create({ UserId, PorjectId })
        .then(() => res.status(201).json({ message: 'Invite user successful' }))
        .catch(next)
    }

    static findUser (req, res, next) {
      const GroupId = req.params.groupId
      User.findAll({
        where: {
          GroupId: {
            [Op.not]: GroupId
          }
        },
        attributes: {
          exclude: ['password']
        }
      })
      .then(users => res.status(200).json({ users }))
      .catch(next)
    }

    static exit (req, res, next) {
      const GroupId = req.params.groupId
      const { currentUserId } = req
      Member.delete({
        where: {
          UserId: currentUserId,
          GroupId
        }
      })
        .then(() => res.status(200).json({ message: 'Exit group success!' }))
        .catch(next)
    }
  }