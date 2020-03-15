const {
    Task,
    User
} = require("../models")
const {
    customError
} = require("../helpers/errorModel.js")
// const restdb = require("../helpers/thirdParty.js")

class TaskController {

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
            .then(response => {

                console.log("RESPONSE FOUND:");
                // console.log(response);

                // PILAH DISINI AJA SBLOM KIRIM
                // take .dataValues.category to flag category
                // take dataValues for body values
                let backlog = []
                let requested = []
                let wip = []
                let done = []
                let allData = []
                response.forEach(el => {
                    if (el.dataValues.category === "backlog") {
                        backlog.push(el)
                    } else if (el.dataValues.category === "requested") {
                        requested.push(el)
                    } else if (el.dataValues.category === "wip") {
                        wip.push(el)
                    } else if (el.dataValues.category === "done") {
                        done.push(el)
                    }

                    allData.push(el.dataValues)
                })


                // let backlog = [ { "id": 2,
                // "title": "nyekar",
                // "due_date": new Date("2020-05-04"),
                // "category": "backlog",
                // "UserId": 5}]
                // let requested = [ { "id": 2,
                // "title": "nyekar",
                // "due_date": new Date("2020-05-04"),
                // "category": "requested",
                // "UserId": 5}]
                // let wip = [ { "id": 2,
                // "title": "nyekar",
                // "due_date": new Date("2020-05-04"),
                // "category": "wip",
                // "UserId": 5}]

                // let done = [ { "id": 2,
                // "title": "nyekar",
                // "due_date": new Date("2020-05-04"),
                // "category": "done",
                // "UserId": 5}]

                let tasks = {
                    backlog,
                    requested,
                    wip,
                    done
                }

                console.log("TASK FOUND!");
                res.status(200).json({
                    data: tasks,
                    allData: allData,
                    message: "Here are the complete list",
                    decoded: req.decoded
                })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }


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

                res.status(201).json({
                    data: task
                })

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


    static getById(req, res, next) {
        console.log(">>> FIND TODOS BY ID <<<");
        console.log(`req decoded is`);
        console.log(req.decoded);
        // console.log(`payload is`);
        // console.log(req.payload);
        console.log("REQ PARAMS");
        console.log(req.params);
        Task.findAll({
                where: {
                    id: +req.params.id
                }
            })
            .then(response => {
                console.log(`RECOVERED TODO: `);
                console.log(response);
                if (response) {
                    res.status(200).json({
                        data: response,
                        message: "Entry found",
                        decoded: req.decoded
                    })
                } else {
                    console.log(`BAD MOVE! NOT FOUND!`);
                    // res.status(404).json({error: "Entry Not Found"})
                    throw new customError(404, "ENTRY NOT FOUND")
                }
            })
            .catch(err => {
                next(err)
            })
    }


    static update(req, res, next) {
        console.log(`>>>> UPDATE TASK BY ID <<<<`);
        console.log(req.params.id);
        console.log(`checking which user`);
        console.log(req.decoded);
        // console.log(`which payload again?`);
        // console.log(req.payload);
        Task.update({
                title: req.body.title,
                category: req.body.category,
                due_date: req.body.due_date,
                UserId: req.decoded.id
            }, {
                where: {
                    id: +req.params.id
                },
                returning: true
            })
            .then(updated => {
                console.log(`UPDATED DATUM IS:`);
                console.log(updated);
                if (updated[0] === 0) {
                    // res.status(404).json({error: "Entry Not Found"})
                    throw new customError(404, "Entry not found")
                } else {
                    console.log("UPDATE SUCCESS");
                    console.log(`SEND UPDATE STATUS`);
                    res.status(200).json({
                        data: updated[1],
                        message: "Entry updated"
                    })

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
                if (deleted === 1) {
                    res.status(200).json({
                        data: deleted,
                        message: "Delete Success"
                    })
                } else {
                    throw new customError(404, "ENTRY NOT FOUND")
                }
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = TaskController