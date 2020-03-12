const { Project, User, Member, sequelize } = require('../models')

module.exports = 
  class ProjectController {
    static findAll (req, res, next) {
      { currentUserId } = req
      Project.findAll({
        order: [['id']]
        include: [
          {
            model: User,
            where: {
              id: currentUserId
            }
          }
        ]
      })
        .then(projects => res.status(200).json({ projects }))
        .catch(next)
    }

    static create (req, res, next) {
      const { currentUserId } = req
      const { name } = req.body
      sequelize.transaction(t => {
        Project.create({ name }, {
          transaction: t
        })
          .then(project => {
            return Member.create({
              UserId: currentUserId,
              ProjectId: project.id
            }, {
              transaction: t
            })
          })
      })
        .then()
      
      
    }
  }