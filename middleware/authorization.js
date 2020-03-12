const { Task } = require('../models')

module.exports = function(req, res, next) {
    
    Task.findByPk(req.params.id)
        .then(function(result) {
            if(result.UserId == req.authenticated.id) {
                next()
            }
            else {
                let err = {
                    msg: "Not Authorized to do this task"
                }
                throw err
            }
        })
        .catch(function(err) {
            next(err)
        })
}