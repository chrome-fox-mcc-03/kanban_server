const { getPayload } = require('../helper/jwt');
const { User } = require('../models');
const appError = require('../helper/appError');

module.exports = function(req, res, next) {
    let token = req.headers.token;
    if (!token) {
        next(appError(400, "Please login as valid user"));
    } else {
        let payload = getPayload(token);
        if (!payload) {
            next(appError(400, "Please login as valid user"))
        } else {
            User.findOne()
            .then(result => {
                if (result) {
                    req.appUser = payload;
                    next()
                } else {
                    next(appError(400, "Please login as valid user"));
                }
            })
            .catch(next);
        }
    }
}