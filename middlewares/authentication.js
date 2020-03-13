const { verifyToken } = require('../helpers/jwt') ;
const { User } = require('../models') ;

module.exports = function (req , res, next) {
    try {
        const access_token = req.headers.access_token ;
        req.decoded = verifyToken(access_token) ;

        User.findOne({
            where:{
                email : req.decoded.email
            }
        })
            .then ((response)=>{
                if(response){
                    next()
                } else {
                    next ( {
                        status : 401,
                        message : 'You are not authenticated'
                    })
                }
                return null
            })

            .catch ((err)=>{
                next(err)
            })



    }
    catch {
        next ( {
            status : 401,
            message : 'You are not authenticated'
        })
    }
}