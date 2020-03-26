const { Project, User, Member, Task, sequelize } = require('../models')

module.exports = 
  class ProjectController {
    static findAll (req, res, next) {
      const { currentUserId } = req
      Project.findAll({
        order: [['id']],
        include: [
          {
            model: User,
            where: {
              id: currentUserId
            }
          },
          Task
        ]
      })
        .then(projects => res.status(200).json({ projects }))
        .catch(next)
    }

    static create (req, res, next) {
      const { currentUserId } = req
      const { name } = req.body
      return sequelize.transaction(t => {
        return Project.create({ name }, {
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
          .then(() => res.status(201).json({ message: 'Create project successful' }))
          .catch(next)
      })
    }

    static findByPk (req, res, next) {
      const { id } = req.params
      Project.findByPk(id, {
        include: [User, Task]
      }) 
        .then(project => res.status(200).json({ project }))
        .catch(next)
    }
  }