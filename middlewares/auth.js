const { User, Project, Task } = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = {
  userAuth(req, res, next) {
    const { token } = req.headers
    const decoded = verifyToken(token)
    User.findByPk(decoded.id)
      .then(user => {
        if (!user) throw {
          status: 404,
          message: 'Please log in first'
        }
        else {
          req.currentUserId = decoded.id
          next()
        }
      })
      .catch(next)
  },

  groupAuth(req, res, next) {
    const { projectid } = req.headers
    const { currentUserId } = req
    User.findOne({
      where: { id: currentUserId },
      include: [
        {
          model: Project,
          where: { id: +projectid }
        }
      ]
    })
    .then(user => {
      if (!user) throw {
        status: 401,
        message: 'User does not belongs to the Project'
      }
      else {
        req.currentProject = projectid
        next()
      }
    })
    .catch(next)
  },

  authorization(req, res, next) {
    const { currentProject } = req
    const { id } = req.params
    Task.findByPk(id)
      .then(task => {
        console.log(task.ProjectId, currentProject, 'tesssssssssst')
        if (!task) throw {
          status: 401,
          message: `Task does not belongs user's project`
        }
        else {
          if (task.ProjectId != +currentProject) throw {
            status: 401,
            message: `Task does not belongs user's project`
          }
          else next()
        }
      })
      .catch(next)
  }
}