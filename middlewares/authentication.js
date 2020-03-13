const jwt = require('jsonwebtoken')
const {User} = require('../models')
const {decodedToken} = require('../helpers/helper')

module.exports = {
    authentication: (req,res,next) => {
        let {token} = req.headers
        let decoded = decodedToken(token)
        User.findOne({
            where: {
                id:decoded.id,
                email:decoded.email
            }
        })
        .then((result) => {
            next()    
        }).catch((err) => {
            next(err)
        });
    }
}