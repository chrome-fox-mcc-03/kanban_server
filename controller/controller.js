const {User, Project, ProjectUser , Task } = require('../models')

class Controller {
   static findProject(req, res, next) {
        // Project.findAll({
        //     where:{
        //         UserId: req.authenticated.id
        //     }
        // })
        //     .then(function(result) {
        //         // console.log(result)
        //         res.status(200).json(result)
        //     })
        //     .catch(function(err) {
        //         next(err)
        //     })
        ProjectUser.findAll({
            where: {
                UserId: req.authenticated.id
            },
            include: [Project]
        })
            .then(function(result) {
                console.log(result)
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })
   }

   static GenerateProject(req, res, next) {
       let Users;
       let Backlog;
       let Product;
       let Development;
       let Done;
       let ProjectId = req.body.data
    //    console.log(ProjectId)
        ProjectUser.findAll({
            where:{
                ProjectId
            },
            include: [ User ]
        })
            .then(function(result) {
                // console.log(result)
                Users = result
                return Task.findAll({
                    where:{
                        ProjectId: ProjectId,
                        Category: "Backlog" 
                    },
                    include: [User]
                })
            })
            .then(function(resultb) {
                Backlog = resultb;
                return Task.findAll({
                    where: {
                        ProjectId: ProjectId,
                        Category: "Product"
                    },
                    include: [ User ]
                    
                })
            })
            .then(function(resultp) {
                Product = resultp
                return Task.findAll({
                    where: {
                        ProjectId: ProjectId,
                        Category: "Development"
                    },
                    include: [User]
                })
            })
            .then(function(resultd) {
                Development = resultd
                return Task.findAll({
                    where: {
                        ProjectId: ProjectId,
                        Category: "Done"
                    },
                    include: [User]
                })
            })
            .then(function(resultdone) {
                Done = resultdone;
                console.log(Users)
                console.log(Backlog)
                console.log(Product)
                console.log(Development)
                console.log(Done)
                res.status(200).json({Users, Backlog, Product, Development, Done})
            })
            .catch(function(err) {
                next(err)
                // console.log(err)
            })
   }

   static createProject(req, res, next) {
       console.log(req.body)
       let UserId = req.authenticated.id
       console.log(UserId)
       let Title = req.body.data
       let project
       Project.create({
           UserId,
           Title
       })
        .then(function(result) {
            console.log("create project")
            // console.log(result)
            // project = result
            let ProjectId = result.id
            return ProjectUser.create({
                ProjectId,
                UserId
            })
        })
        .then(function(result) {
            // console.log("create conjunction")
            // console.log(result)
            // res.status(200).json(project)
            return Project.findAll({
                where: {
                    UserId: UserId
                }
            })
        })
        .then(function(result) {
            // console.log(result)
            project = result
            res.status(200).json(project)
        })
        .catch(function(err) {
            next(err)
        })
   }

   static createTask(req, res, next) {
        let UserId = req.authenticated.id
        let ProjectId = req.body.ProjectId
        let Title = req.body.data.Title
        let Content = req.body.data.Content
        let Due_Date = req.body.data.Due_Date
        let Category = req.body.data.Category
        console.log(UserId, ProjectId, Title, Content, Due_Date, Category)
        Task.create({
            UserId,
            ProjectId,
            Title,
            Content,
            Due_date: Due_Date,
            Category
        })
            .then(function(result) {
                res.status(201).json(result)
            })
            .catch(function(err) {
                next(err)
            })
   }

   static addUser(req, res, next) {
       console.log(req.body)
       let Email = req.body.data.Email
       let ProjectId = req.body.data.ProjectId
       console.log(Email, ProjectId)
       User.findAll({
           where: {
               Email
           }
       })
            .then(function(result) {
                console.log(result)
                // console.log()
                if(result) {
                    console.log('ketemu hasilnya')
                    let UserId = result[0].dataValues.id
                    return ProjectUser.create({
                        ProjectId,
                        UserId
                    })
                }
                else {
                    let err = {
                        msg: "This Email Is Not Registered"
                    }
                    throw err
                }
            })
            .then(function(result) {
                console.log('berhasil add user')
                res.status(200).json(result)
            })
            .catch(function(err) {
                
                next(err)
            })

   }

   static deleteTask(req, res, next) {
       console.log(req.params.id)
       let id = req.params.id
       Task.destroy({
           where: {
               id: id
           }
       })
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })
   }

   static updateTask(req, res, next) {
       console.log(req.body.data)
       let Title = req.body.data.Title
       let Content = req.body.data.Content
       let Category = req.body.data.Category
       let Due_date = req.body.data.Due_Date
       let id = req.body.data.id
       Task.update({
            Title,
            Content,
            Category,
            Due_date
       }, {
           where: {
               id: id
           }
       })
            .then(function(result) {
                res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })
   }

}

module.exports = Controller