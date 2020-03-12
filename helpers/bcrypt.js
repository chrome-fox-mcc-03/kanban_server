const bcrypt = require('bcryptjs')


function Hash(password) {
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function Compare(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)
}
module.exports = {
    Hash,
    Compare
}