const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.exports = {
  createToken (id) {
    return jwt.sign({ id }, SECRET)
  },

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, SECRET)
      return decoded
    } catch (error) {
      throw error
    }
  }
}