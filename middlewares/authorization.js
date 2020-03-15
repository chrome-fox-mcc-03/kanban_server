const jwt = require('jsonwebtoken')
const {Todo} = require('../models')
const {decodedToken} = require('../helpers/helper')
module.exports = {
    authorization: (req,res,next) => {
        let {id} = req.params
        let {token} = req.headers
        let decoded = decodedToken(token)
        Todo.findOne({
            where:{
                id
            }
        })
        .then((result) => {
            if(result.dataValues.UserId == decoded.id) {
                next()
            }else {
                next({status:401,message:'Not Authorized'})
            }
        }).catch((err) => {
            next({status:401,message:'Not Authorized'})
        });
    }
}