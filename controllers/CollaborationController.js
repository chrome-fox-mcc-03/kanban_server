const { Collaboration, User } = require('../models')

class CollaborationController {
    static findAll(req, res, next) {
        let ProjectId = req.params.ProjectId
        Collaboration.findAll({ where: { ProjectId }, include: [User] })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    static create(req, res, next) {
        const email = req.body.email
        User.findOne({ where: { email } })
            .then(user => {
                let input = {
                    UserId: user.id,
                    ProjectId: req.body.ProjectId
                }
                return Collaboration.create(input)
                    .then(result => {
                        res.status(201).json({ msg: `User successfully joined with your project!`, collaboration: result })
                    })
            })

            .catch(next)
    }

    static delete(req, res, next) {
        const id = req.params.id
        Collaboration.destroy({ where: { id } })
            .then(result => {
                res.status(200).json({ msg: `User removed from the Project!`, collaboration: result })
            })

            .catch(next)
    }
}

module.exports = CollaborationController