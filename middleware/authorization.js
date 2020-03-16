const {Task} = require('../models')

function authorize(req, res, next){
    Task.findOne({where: {id : req.params.id}})
        .then(data=> {
            if(data){
                if (data.ProjectId == req.params.pId) {
                    next()
                } else {
                    res.status(401).json('Not Authorized')
                }
            } else {
                res.status(401).json('Not Authorized')
            }
        })
        .catch(err=> next(''))
}

module.exports = authorize