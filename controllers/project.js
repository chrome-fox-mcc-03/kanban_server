const { Project, ProjectUser, User } = require('../models')
const { verifyToken, generateToken } = require('../helpers/jwt')

class ProjectController {

        static create (req, res, next){
            let { name } = req.body
            Project
                .create({name})
                .then(task => {
                    res.status(201).json(task)
                })
                .catch(next)
        }
    
        static findAll (req, res, next){
            console.log('masuk find ALl+++++=')
            console.log(req.project_id);
            
            Project
                .findAll({
                    // where: {
                    //     ProjectId : req.project_id
                    // },
                    include: [
                       { model: User}
                    ]
                })
                .then(projects => {
                    res.status(200).json(projects)
                })
                .catch(next)
        }
    
        static findOne (req, res, next){
            Project
                .findOne({
                    where: {
                        id : req.params.id
                    }, 
                    include: [
                        { model: User}
                    ]
                })
                .then(task => {
                    let dataProject = {
                        id: task.id,
                        name: task.name,
                        users: task.Users
                    }
                    let project_id = generateToken(dataProject)
                    let resultToken = verifyToken(project_id)
                    dataProject.project_id = project_id
                    dataProject.resultToken = resultToken
                    res.status(200).json(dataProject) 
                })
                .catch(next)
        }
    
        static update (req, res, next){
            let {name} = req.body
            Project
                .update({name}, {
                    where: {
                        id : req.params.id
                    }
                })
                .then(project => {
                    return Project.findByPk(req.params.id)
                })
                .then( project => {
                    res.status(200).json({
                        msg: "Success update data",
                        data: project
                    })
                })
                .catch(next)
        }
    
        static remove (req, res, next){
            let {name} = req.body
            let dataDelete
            Project
                .findByPk(req.params.id)
                .then(project => {
                    dataDelete = project
                    return Project.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                })
                .then( task => {
                    res.status(200).json({
                        msg: "Success delete data",
                        data: dataDelete
                    })
                })
                .catch(next)
        }
}

module.exports = ProjectController