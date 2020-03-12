const {User, Project, ProjectUser , Task } = require('../models')

class Controller {
   static findProject(req, res, next) {
        Project.findAll({
            where:{
                UserId: req.authenticated.id
            }
        })
            .then(function(result) {
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
       let ProjectId = req.body.ProjectId
        ProjectUser.findAll({
            where:{
                ProjectId
            },
            include: [User]
        })
            .then(function(result) {
                Users = result
                return Task.findAll({
                    where:{
                        ProjectId: ProjectId,
                        Category: "Backlog" 
                    }
                })
            })
            .then(function(resultb) {
                Backlog = resultb;
                return Task.findAll({
                    where: {
                        ProjectId: ProjectId,
                        Category: "Product"
                    },
                    include: [User]
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
                res.status(200).json({Users, Backlog, Product, Development, Done})
            })
            .catch(function(err) {
                next(err)
            })
   }

   static createProject(req, res, next) {
       let UserId = req.authenticated.id
       let Title = req.body.Title
       let project
       Project.create(
           UserId,
           Title
       )
        .then(function(result) {
            project = result
            let ProjectId = result.id
            return ProjectUser.create({
                ProjectId,
                IserId
            })
        })
        .then(function(result) {
            res.status(200).json(project)
        })
        .catch(function(err) {
            next(err)
        })
   }

   static createTask(req, res, next) {
        let UserId = req.authenticated.id
        let ProjectId = req.body.ProjectId
        let Title = req.body.Title
        let Content = req.body.Content
        let Due_Date = req.body.Due_Date
        let Category = req.body.Category
        Task.create({
            UserId,
            ProjectId,
            Title,
            Content,
            Due_Date,
            Category
        })
            .then(function(result) {
                res.status(201).json(result)
            })
            .catch(function(err) {
                next(err)
            })
   }
}

module.exports = Controller