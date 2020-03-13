const { Task, User } = require('../models')

class TaskController {
    static fetchTask(req, res, next){
        
        Task.findAll({
            include : User
        })
        .then((taskFound) => {
            let task = {}
            let backlog = []
            let product = []
            let development = []
            let done = []
            console.log(taskFound);
            for (let index = 0; index < taskFound.length; index++) {
                if(taskFound[index].category === 'backlog'){
                    backlog.push(taskFound[index])
                }
                else if(taskFound[index].category === 'product'){
                    product.push(taskFound[index])
                }
                else if(taskFound[index].category === 'development'){
                    development.push(taskFound[index])
                }
                else if(taskFound[index].category === 'done'){
                    done.push(taskFound[index])
                }
            }
            task = [
                backlog,
                product,
                development,
                done
            ]

            res.status(200).json(task)
        }).catch((err) => {
            res.status(500).json({
                err
            })
        });
    }

    static editTask(req, res, next) {
        // const { title, category }
        const id = req.params.id
        const titleEdit = req.body.title

        Task.update({
            title : titleEdit,
            category : req.body.category
            
        },{
            where : {
                id: id,
            }
        })
        .then((editedData) => {
            res.status(200).json({
                editedData
            })
        }).catch((err) => {
            res.status(500).json({
                err
            })
        });
    }

    static deleteTask(req, res, next) {
        console.log(req.params.id);
        
        const id = req.params.id

        Task.destroy({
            where : {
                id
            }
        })
        .then((success) => {
            res.status(200).json({
                success
            })
        }).catch((err) => {
            res.status(500).json({
                err
            })
        });
    }

    static createTask(req, res, next) {
        const { title, category } = req.body
        console.log(title, category);
        
        const UserId = req.headers.userId
        Task.create({
            title,
            category,
            UserId
        })
        .then((taskCreated) => {
            res.status(200).json({
                taskCreated
            })
        }).catch((err) => {
            res.status(500).json({
                err
            })
        });
    }
}

module.exports = {
    TaskController
}
