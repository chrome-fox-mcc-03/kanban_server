const bcrypt = require('bcryptjs')
const salt = +process.env.SALT

module.exports = {
    hashingPassword: (password) => {
        let salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    },
    checkingPassword: (inputPassword, passwordDB) => {
        return bcrypt.compareSync(inputPassword, passwordDB)
    }
}