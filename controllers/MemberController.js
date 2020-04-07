const { Member, User, Project } = require('../models')
const { Op } = require('sequelize')

module.exports = 
  class MemberController {
    static invite (req, res, next) {
      const { UserId, ProjectId } = req.body
      Member.create({ UserId, ProjectId })
        .then(() => res.status(201).json({ message: 'Invite user successful' }))
        .catch(next)
    }

    static findUser (req, res, next) {
      const ProjectId = req.params.projectId
      User.findAll({
        include: [
          {
            model: Project,
            // where: {
            //   ProjectId: {
            //     [Op.not]: ProjectId
            //   }
            // }
          }
        ],
        attributes: {
          exclude: ['password']
        }
      })
      .then(users => res.status(200).json({ users }))
      .catch(next)
    }

    static exit (req, res, next) {
      const ProjectId = req.params.projectId
      const { currentUserId } = req
      Member.delete({
        where: {
          UserId: currentUserId,
          ProjectId
        }
      })
        .then(() => res.status(200).json({ message: 'Exit group success!' }))
        .catch(next)
    }
  }