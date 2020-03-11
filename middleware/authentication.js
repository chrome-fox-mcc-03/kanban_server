const { verifyToken } = require("../helpers/jwt.js")
const customError = require("../helpers/errorModel.js")
const { User } = require("../models")

function authentication() {

    console.log(">>AUTHENTICATION<< \n");
    let accessToken = req.headers.access_token
    let payload = verifyToken(accessToken)

    req.decoded = payload
    User.findAll({
        where: {
            id: payload.id
        }
    })
    .then(response => {
        console.log("USER FOUND");
        console.log(response);
        if(response) {
            if(response[0].id === payload.id) {
                console.log("AUTHENTICATION MATCH");
                next()
            } else {
                throw new customError(400, "UNAUTHORIZED ACCESS")
            }
        } else {
            throw new customError(404, "ENTRY NOT FOUND")
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authentication