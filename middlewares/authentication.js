const { User } = require('../models/index.js')
const { verifyToken } = require('../helpers/jwt.js')

function authentication(req, res, next) {
    // res.status(200).json('Masuk')
    // console.log(req.headers)
    const token = req.headers.token
    try {
        req.decoded = verifyToken(token);
        console.log(req.decoded)
        User.findOne({where: {id: req.decoded.id}})
            .then(exists => {
                if(exists) {
                    console.log("mantap")
                    return next()
                }
                else {
                    throw {status: 404, customName: 'User not found!'}
                }
            })
            .catch(err => next(err))
    } catch(err) {
        // err
        console.log(err)
        throw err
    }
}

module.exports = authentication