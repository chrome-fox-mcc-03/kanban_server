const { ProjectUser, Project } = require('../models')

class ProjectUserController {
    static create(req, res, next){
        let {ProjectId} = req.body
        let newProjectUser = {ProjectId}
        newProjectUser.UserId = req.currentUserId

        ProjectUser
            .create(newProjectUser)
            .then(projectUser => {
                res.status(201).json(projectUser)
            })
            .then(next)
    }

    static findAll(req, res, next){
        ProjectUser
            .findAll({
                where: {
                    UserId : req.currentUserId
                },
                attributes: [
                    'id',
                    'UserId',
                    'ProjectId'
                ],
                include: [
                    Project
                ]
            })
            .then(projectUsers => {
                res.status(200).json(projectUsers)
            })
            .catch(next)
    }

    static findOne(req, res, next){
        console.log(req.params.id, 'test')
        ProjectUser
            .findByPk(+req.params.id)
            .then(projectUser => {
                res.status(200).json(projectUser)
            })
            .catch(next)
    }

    static remove(req, res, next){
        console.log()
        ProjectUser
            .destroy({
                where: {
                    id : req.params.id
                }
            })
            .then(projectUser => {
                res.status(200).json(projectUser)
            })
            .catch(next)
    }

    static invite(req, res, next){
        let { ProjectId, UserId } = req.body
        let newProjectUser = { ProjectId, UserId }

        ProjectUser
            .create(newProjectUser)
            .then(projectUser => {
                res.status(201).json(projectUser)
            })
            .then(next)
    }
    
}

module.exports = ProjectUserController