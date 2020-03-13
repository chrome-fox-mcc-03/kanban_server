const {Todo,Label} = require('../models')

class TodoController {
    static addTodo(req,res,next) {
        let {name_box,description,UserId} = req.body
        console.log(name_box,description,UserId)
        console.log(description)
        console.log(UserId)
        Todo.create({
            name_box,
            description,
            UserId
        })
        .then((result) => {
            // console.log(result,'======================================================================================')
            res.status(200).json({name_box,description})
        }).catch((err) => {
            next(err)
        });
    }

    static getTodoByUserId(req,res,next) {
        let UserId = req.params.id
        Todo.findAll({
            where:{
                UserId
            },
            include:Label,
            order:[
                ["id","ASC"]
            ]
        })
        .then((result) => {
            res.status(200).json(result)   
        }).catch((err) => {
            next(err)
        });
    }

    static updateTodo(req,res,next) {
        let {description} = req.body
        let {id} = req.params
        Todo.update({
            description
        },{where:{id}})
        .then((result) => {
            res.status(200).json(result)   
        }).catch((err) => {
            next(err)
        });
    }

    static deleteTodo(req,res,next) {
        let {id} = req.params
        Todo.destroy({
            where:{id}
        })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }
}

module.exports = TodoController