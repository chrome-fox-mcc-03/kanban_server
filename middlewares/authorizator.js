const { User } = require('../models/index');
const { getPayload } = require('../helper/jwt');
const appError = require('../helper/appError');

module.exports = function (req, res, next) {
    const token = req.headers.token;
    const payload = getPayload(token);

    if (!token) {
        next(appError(400, "Please login as valid user"));
    }

    User.findOne()
    .then(result => {

    })
    .catch(next);
    next()
}