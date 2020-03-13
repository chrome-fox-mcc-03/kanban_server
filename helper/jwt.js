const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

class HelperJwt {
  static sign (payload) {
    const decode = jwt.sign({payload},secret)
    return decode
  }
  static decode (payload) {
    const token = jwt.decode(payload,secret)
    return token
  }
}

module.exports = HelperJwt