const { Task } = require('../models/index.js');

module.exports = (req, res, next) => {
    let id = +req.params.id

    Task.findOne({
        where: id
    })
        .then(response => {
            if(response) {
                if(response.UserId === req.decoded.id) {
                    next()
                }
                else {
                    next({
                        status: 403,
                        msg: "You're not authorized to do this action!"
                    })
                }
            } else {
                next({
                    status: 403,
                    msg: "You're not authorized to do this action!"
                })
            }
        })
        
        .catch(err => {
            next(err)
        })
}