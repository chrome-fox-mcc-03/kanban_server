const jwt = require('jsonwebtoken');

function generateToken(data) {
    return jwt.sign(data, process.env.SECRET);
}

function validateToken(token) {
    try {
        return jwt.verify(token, process.env.SECRET);
    } catch (err) {
        return err
    }
}

module.exports = { generateToken, validateToken };