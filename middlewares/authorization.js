const { Task } = require ('../models') ;

module.exports = function (req, res, next) {
    Task.findOne({
        where:{
            id : req.params.id,
            UserId : req.decoded.id
        }
    })
        .then((response)=>{
            if(response){
                next()
            } else {
                next({
                    status : 401,
                    message : 'You are not authorized'
                })
            }
            return null
        })

        .catch((err)=>{
            next(err)
        })
}