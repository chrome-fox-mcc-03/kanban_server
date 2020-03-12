const jwt = require('jsonwebtoken')
const PRIVATKEY = process.env.PRIVATKEY

module.exports = {
    generateToken: (user) => {
        return jwt.sign(user, PRIVATKEY)
    },
    verifyToken: (token) => {
        return jwt.verify(token, PRIVATKEY)
    }
}