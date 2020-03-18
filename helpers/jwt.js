const jwt = require('jsonwebtoken')

function createToken(payload) {
    return jwt.sign(payload, process.env.ENV_SECRET)
}
function verifyToken(token) {
    return jwt.verify(token, process.env.ENV_SECRET)
}

module.exports = { createToken, verifyToken }