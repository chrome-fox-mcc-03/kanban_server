const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

function hashPassword (password) {
    return bcrypt.hashSync(password, salt);
}

function checkPassword (inputPassword, passwordDB) {
    return bcrypt.compareSync(inputPassword, passwordDB)
}

module.exports = {
    hashPassword,
    checkPassword
}