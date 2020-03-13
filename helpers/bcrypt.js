const bcrypt = require('bcrypt')


function hashPassword(password){
    const salt = 8
    const hashedPassword = bcrypt.hashSync(password, salt)
    return hashedPassword 
}

function checkPassword(password, hashedPassword){
    const checked = bcrypt.compareSync(password, hashedPassword)
    return checked
}


module.exports = {
    hashPassword,
    checkPassword
}