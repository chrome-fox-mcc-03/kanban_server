const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
module.exports = {
    encrypt:(password) => {
        let salt = bcrypt.genSaltSync(4)
        let hash = bcrypt.hashSync(password,salt)
        return hash
    },

    getToken: (payload) => {
        let token = jwt.sign(payload,process.env.SECRET)
        return token
    },

    comparePassword: (password,passwordDb) => {
        return bcrypt.compareSync(password,passwordDb)
    },

    decodedToken: (token) => {
        return jwt.verify(token,process.env.SECRET)
    }
}