const bcrypt = require('bcryptjs');

function hashPass(inputPass) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(inputPass, salt);
    return hash
}

function comparePass(inputPass, hashedPass) {
    return bcrypt.compareSync(inputPass, hashedPass);
}

module.exports = {
    hashPass,
    comparePass
}