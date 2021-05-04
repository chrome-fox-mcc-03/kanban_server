
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
            if(userFound){
                req.headers.userId = userFound.dataValues.id
                next()
                return null
            }else{
                const error = {
                    status : 401,
                    message : `User forbidden access!`
                }
                throw error
            }
        }).catch((err) => {
            next(err)
        });
    } catch (error) {
        const err = {
            status : 401,
            message : 'Invalid token or not provided, access prohibited!'
        }
        next(err)
    }
}

module.exports = authentication