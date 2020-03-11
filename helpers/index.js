const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SALT = bcrypt.genSaltSync(+process.env.SALT)
const SECRET = process.env.SECRET

module.exports = {
  hashPassword(password) {
    return bcrypt.hashSync(password, SALT)
  },
  checkPassword(password, dbPassword) {
    return bcrypt.compareSync(password, dbPassword)
  },
  createToken(payload) {
    return jwt.sign(payload, SECRET)
  },
  verifyToken(token) {
    return jwt.verify(token, SECRET)
  }
}