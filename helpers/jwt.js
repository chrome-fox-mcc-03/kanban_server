const jwt = require('jsonwebtoken');


function genToken(payload) {
    return jwt.sign(payload, "Secret")
}

function verToken(token) {
    return jwt.verify(token, "Secret")
}

module.exports = {
    genToken,
    verToken
}