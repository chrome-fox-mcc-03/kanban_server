"use strict"

const jwt = require('jsonwebtoken')
const { User } = require('../models/index')

function authentication(req, res, next){
    try {
        const decodedData = jwt.verify(req.headers.user_token, process.env.SECRET_KEY)
        User.findOne({
            where: {
                id: decodedData.id
            }
        })
        .then(result => {
            if(result){
                req.decoded = {
                    id: decodedData.id
                }
                next()
            }else {
                throw({
                    statusCode: 401,
                    msg: 'You are not authenticated'
                })
            }
        })
    }
    catch(err){
        next(err)
    }
}

module.exports = authentication