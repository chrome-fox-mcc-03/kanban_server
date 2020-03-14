const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports= (req, res, next) => {
    let access_token = req.headers.access_token
    try {
        let decoded = verifyToken(access_token)
        let {id, email} = decoded
        User
            .findOne({
                where: {
                    email: decoded.email
                }
            })
            .then(user => {
                if(user) {
                    req.currentUserId = user.id
                    next()
                } else {
                    next({
                        err: 404,
                        message: "Please login first"
                    })
                }
            })
            .catch(next)
    } catch (error) {
        next(error)
    }
}