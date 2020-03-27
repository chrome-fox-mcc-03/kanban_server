const { verify } = require('./../helpers/jwt')
const { User } = require('./../models')

function authentication(req, res, next) {
    try {
        const token = req.headers.token
        var decoded = verify(token)
        const email = decoded.email
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (!result) {
                    const error = {
                        name: "Authentication Error"
                    }
                    throw error
                } else {
                    const payload = {
                        id: result.id,
                        email: result.email,
                        first_name: result.first_name,
                        last_name: result.last_name,
                        role: result.role
                    }
                    req.decoded = payload
                    next()
                }
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    } catch(err) {
        console.log(err)
        next(err)
    }
}

function adminAuth(req,res,next) {
    const role = req.decoded.role
    if (role === 'admin') {
        next()
    } else {
        const error = {
            name: "You are not authenticated to do such thing"
        }
        next(error)
    }
}

module.exports = {
    authentication,
    adminAuth
}
