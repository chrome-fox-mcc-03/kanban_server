const bcrypt = require('bcryptjs');

function getHash(password) {
    const salt = bcrypt.genSaltSync(9);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function compareHash(strPass, hash) {
    return bcrypt.compareSync(strPass, hash);
}

module.exports = {
    getHash,
    compareHash
}