const { Task } = require("../models")
const  customError  = require("../helpers/errorModel.js")

function authorization() {

    console.log(">>AUTHORIZATION<< \n");
    let taskId = +req.params.id
    let userId = req.decoded.id

    Task.findByPk(taskId)
        .then(response => {
            console.log("TASK FOUND");
            console.log(response);
            if(response) {
                if(response.UserId === userId) {
                    console.log("AUTHORIZATION SUCCESS");
                    next()
                } else {
                    throw new customError(401, "UNAUTHORIZED ACCESS")
                }
            } else {
                throw new customError(404, "ENTRY NOT FOUND")
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization