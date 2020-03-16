const { Task } = require('../models');

function authorization(req,res,next) {
    try {
    Task.findOne({
        where: {
            UserId: req.userId
        }
    })
        .then(result => {
            if(result){
                next()
            } else {
                next({
                    status: 401,
                    message: "unauthorized"
                })
            }
        })
        .catch(err => {
            next({
                status: 401,
                message: "unauthorized"
            })
        })
    } catch(err) {
        next({
            status: 401,
            message: "unauthorized"
        })
    }
}

module.exports = authorization