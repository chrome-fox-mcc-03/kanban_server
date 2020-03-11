const { Task } = require('../models');

module.exports = (req, res, next) => {
    let data = req.decoded;
    
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        if (result.UserId == data.id) {
            next()
        } else {
            next({
                status: 400,
                message: `you aren't authorized to do this`
            })
        }
    })
    .catch(error => {
        next({
            status: 404,
            message: `cannot find task`
        })
    })
}