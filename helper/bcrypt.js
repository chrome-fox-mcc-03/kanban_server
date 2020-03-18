const bcrypt = require('bcryptjs')
const salt  = +process.env.SALT
class HelperBcrypt {
  static generate (password) {
    const hashpw = bcrypt.hashSync(password,salt)
    return hashpw
  }
  static compare (password, hashpassword) {
    const comparepw = bcrypt.compareSync(password,hashpassword)
    return comparepw
  }
}

module.exports = HelperBcrypt