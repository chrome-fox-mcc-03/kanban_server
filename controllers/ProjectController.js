const { Project, Task, Collaboration } = require('../models')

class ProjectController {
    static create(req, res, next) {
        let input = {
            name: req.body.name
        }
        Project.create(input)
            .then(project => {
                // setelah project terbuat, maka buat collaboration untuk dirinya sendiri
                let data = {
                    ProjectId: project.id,
                    UserId: req.currentUserId
                }
                return Collaboration.create(data)
                    .then(collaboration => {
                        console.log(collaboration)
                        res.status(201).json({ msg: 'Project created!', project })
                    })
            }).catch(next)
    }


    static findAll(req, res, next) {
        let UserId = req.currentUserId
        Collaboration.findAll({ where: { UserId }, include: [Project] })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }

    static findOne(req, res, next) {

        let id = req.params.id
        Project.findOne({ where: { id }, include: [Task] })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        let id = req.params.id
        Project.findByPk(id)
            .then(result => {
                const project = result
                // delete collaboration juga
                Project.destroy({ where: { id } })
                    .then(result => {
                        Collaboration.destroy({ where: { ProjectId: id } })
                            .then(result => {
                                res.status(200).json({ msg: `Data deleted!`, project })
                            })
                            .catch(next)
                    })
                    .catch(next)
            })
            .catch(next)
    }
}

module.exports = ProjectController