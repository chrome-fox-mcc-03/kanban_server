const { Task, User } = require("../models")
const customError = require("../helpers/errorModel.js")
// const restdb = require("../helpers/thirdParty.js")

class TaskController {

    static create(req, res, next) {
        console.log(">>> CREATE TODO <<<");
        Task.create({
            title: req.body.title,
            category: req.body.category,
            due_date: req.body.due_date,
            UserId: req.decoded.id
        })
        .then(task => {
            console.log("CREATE SUCCESS");
            console.log(task);

            res.status(201).json({data:task})

            // console.log(`status sent! what about the restdb post?`);

            // /*
            // SEND TO EMAIL USING RESTDB 
            //  */
            // restdb.post("/mail", {
            //     "to": req.decoded.email,
            //     "subject": "You just added a to-do!",
            //     "html": 
            //     `<h2>NEW TO-DO:</h2> <br>
            //      <h3>Title: ${req.body.title}</h3><br>
            //      <h3>Description: ${req.body.description}</h3><br>
            //      <h3>Status: ${req.body.email}</h3><br>
            //      <h3>Due Date: ${req.body.due_date}</h3><br>`,
            //      "company": "fancyToDoServer",
            //      "sendername": "Admin"
            // })
            
            console.log(`restdb POST SUCCESS`);
            
        })
        .catch(err => {
            next(err)
        })
    }

    static getAll(req, res, next) {
        console.log(">>> FIND ALL TODOS <<<");
        console.log(`req decoded is`);
        console.log(req.decoded);
        console.log(`the ID of decoded is ${req.decoded.id}`);
        console.log(`payload is`);
        console.log(req.decoded);
        
        Task.findAll({
            include: [{
                model: User,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'password']
                }
            }],
            where: {
                UserId: req.decoded.id
            }
        })
            .then(tasks => {
                console.log("TODOS FOUND!");
                res.status(200).json({data:tasks, message: "Here are the complete list", decoded:req.decoded})
            })
            .catch(err => {
                next(err)
            })
    }

    static getById(req, res, next) {
        console.log(">>> FIND TODOS BY ID <<<");
        console.log(`req decoded is`);
        console.log(req.decoded);
        // console.log(`payload is`);
        // console.log(req.payload);
        Task.findByPk(+req.params.id)
        .then(task => {
            console.log(`RECOVERED TODO: `);
            console.log(todo);
            res.status(200).json({data:task, message: "Entry found", decoded:req.decoded})
            // if(todo) {
            //     res.status(200).json({todo:todo, message: "Entry found", decoded:req.decoded})
            // } 
            // else {
            //     console.log(`BAD MOVE! NOT FOUND!`);
            //     // res.status(404).json({error: "Entry Not Found"})
            //     throw new CustomError(404, "ENTRY NOT FOUND")
            // }
        })
        .catch(err => {
            next(err)
        })
    }

    static update(req, res, next) {
        console.log(`>>>> UPDATE TODO BY ID <<<<`);
        console.log(req.params.id);
        console.log(`checking which user`);
        console.log(req.decoded);
        // console.log(`which payload again?`);
        // console.log(req.payload);
        Task.update(
            {
                title: req.body.title,
                category: req.body.category,
                due_date: req.body.due_date,
                UserId: req.decoded.id
            }, {
                where: {
                    id: +req.params.id
                },
                returning: true
            }
        )
        .then(updated => {
            console.log(`UPDATED DATUM IS:`);
            console.log(updated);
            if(updated[0] === 0) {
                // res.status(404).json({error: "Entry Not Found"})
                throw new customError(404, "Entry not found")
            } else {
                console.log("UPDATE SUCCESS");
                console.log(`SEND UPDATE STATUS`);
                res.status(200).json({data:updated[1], message: "Entry updated"})

                // console.log(`entering restdb update`);

                // restdb.post("/mail", {
                //     "to": req.decoded.email,
                //     "subject": "You just added a to-do!",
                //     "html": 
                //     `<h2>UPDATED TO-DO:</h2> <br>
                //      <h3>Title: ${req.body.title}</h3><br>
                //      <h3>Description: ${req.body.description}</h3><br>
                //      <h3>Status: ${req.body.email}</h3><br>
                //      <h3>Due Date: ${req.body.due_date}</h3><br>`,
                //      "company": "fancyToDoServer",
                //      "sendername": "Admin"
                // })
                
                // console.log(`RESTDB UPDATE SUCCESS`);
                
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res, next) {
        console.log(">>>> DELETE TODO <<<<");
        Task.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(deleted => {
            console.log("DELETE SUCCESS");
            if(deleted === 1) {
                res.status(200).json({data:deleted, message: "Delete Success"})
            } else {
                throw new customError(404, "ENTRY NOT FOUND")
            }
        })
        .catch(err => {
            next(err)
        })
    }

    // static assign(req, res, next) {}
    // static discharge(req, res, next) {}
    
}

module.exports = TaskController