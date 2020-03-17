const { Project, Collaboration } = require('../models')
function ProjectAuthorization(req, res, next) {
    Project.findOne({
        where: {
            id: req.params.id
        }
    }).then(project => {
        if (project) {
            const ProjectId = project.id
            return Collaboration.findOne({ where: { ProjectId } })
                .then(collaboration => {
                    if (collaboration) {
                        if (collaboration.UserId == req.currentUserId) {
                            next()
                        } else {
                            next({ name: 'Unauthorized' })
                        }
                    } else {
                        next({ name: '404NotFound' })
                    }
                })
        } else {
            next({ name: '404NotFound' })
        }
    }).catch(err => {
        next(err)
    })
}

module.exports = {
    ProjectAuthorization
}