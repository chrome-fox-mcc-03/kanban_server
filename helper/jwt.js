const jwt = require('jsonwebtoken');

function getToken(payload) {
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
}

function getPayload (token) {
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded
    } catch(err) {
        return null
    }
}

module.exports = {
    getToken,
    getPayload
}