const { Todo } = require('../models/index.js')
const { verifyToken } = require('../helpers/jwt.js')

function authorization(req, res, next) {
    const token = req.headers.token
    let user = verifyToken(token)
    Todo.findOne({where: {id: req.params.id}})
        .then(todo => {
            if(todo.UserId === user.id) return next()
            else throw {status: 400, customName: 'You do not have access to this item, check again.'}
        })
        .catch(err => next(err))
}

module.exports = authorization;