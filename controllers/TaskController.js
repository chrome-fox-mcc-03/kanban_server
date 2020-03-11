const { User, Task } = require ('../models') ;

class TaskController {

    static showTasks (req ,res, next){
        Task.findAll({
            where: {
                UserId : req.decoded.id
            }
        })
            .then((response)=>{
                res.status(200).json({
                    data : response
                })
            })

            .catch((err)=>{
                next(err)
            })

    }
    static createTask (req,res,next) {

        let newTask = {
            title : req.body.title,
            category : 'backlog',
            UserId : req.decoded.id
        }

        Task.create (newTask)
            .then ((response)=>{
                res.status(201).json({
                    data: response
                })
            })

            .catch((err)=>{
                next(err)
            })
    }

    static showTaskById(req, res, next){
        let idToFind = req.params.id ;

        Task.findByPk(idToFind)
            .then((response)=>{
                if(response){
                    res.status(200).json({
                        data: response
                    })

                } else {
                    next({
                        status : 400,
                        message : 'Task not found'
                    })
                }
            })

            .catch((err)=>{
                next(err)
            })
    }

    static editTask (req,res,next){
        let idToEdit = req.params.id ;

        Task.findByPk(idToEdit)

        .then((response)=>{
            if(response){
                let updateTask = {
                    title : req.body.title,
                    category : response.category,
                    UserId : req.decoded.id
                }

                return Task.update (updateTask, {
                    where : {
                        id : idToEdit
                    },
                    returning: true
                })

            } else {
                next({
                    status : 400,
                    message : 'Task not found'
                })
            }
        })

        .then ((updated )=>{
            res.status(200).json({
                data : updated[1],
                message : 'updated'
            })
        })

        .catch((err)=>{
            next(err)
        })
    }
    
    static deleteTask (req,res,next){
        let idToDelete = req.params.id ;

        Task.destroy({
            where : {
                id : idToDelete
            }
        })
            .then((response)=>{
                res.status(200).json({
                    message : 'deleted'
                })
            })
            .catch((err)=>{
                next(err)
            })
    }

}

module.exports = TaskController