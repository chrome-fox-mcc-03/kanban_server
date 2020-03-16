const jwt = require('jsonwebtoken')
const { User } = require('../models')

module.exports = function(req, res, next) {
    const access_token = req.headers.access_token
    const authenticated = jwt.verify(access_token, process.env.JWT_SECRET)
    req.authenticated = authenticated
    User.findOne({
        where: {
            id: req.authenticated.id
        }
    })
        .then(function(result) {
            if(result) {
                next()
            }
            else {
                let err = {
                    msg: "Not Authenticated"
                }
                throw err
            }
        })
        .catch(function(err) {
            next(err)
        })
}