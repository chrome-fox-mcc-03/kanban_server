
const jwt = require('jsonwebtoken')
const { User } = require('../models')

function authentication (req, res, next){

    try {        
        const access_token = req.headers.access_token
        
        const decoded_token = jwt.verify(access_token, process.env.SECRET)
        const {email, id} = decoded_token
        
        User.findOne({
            where : {
                id,
                email
            }
        })
        .then((userFound) => {
            req.headers.userId = userFound.dataValues.id
            next()
            return null
        }).catch((err) => {
            next(err)
        });
    } catch (error) {
        
    }
}

module.exports = authentication