const jwt = require("jsonwebtoken")

function createToken(payload) {
    jwt.sign(payload, process.env.SECRET, {
        expiresIn: "1h"
    })
}

function verifyToken(logged) {
    jwt.verify(logged, process.env.SECRET, {
        maxAge: "1h"
    })
}

module.exports = {
    createToken, verifyToken
}