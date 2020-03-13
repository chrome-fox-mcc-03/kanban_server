const { User } = require('../models/index')
const { createToken } = require('../helpers/jwt')

class Controller {
    static register(req, res, next) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(newUser)
            .then(user => {
                let payload = {
                    id = user.id,
                    email = user.email
                }
                let token = createToken(payload)
                return res.status(201).json({accessToken: token})
            })
            .catch(err => next(err))
    }
    static login(req, res, next) {
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({where: {email: user.email}})
            .then(user=> {
                if(!user) {
                    throw { status: 400, customName: 'Email/pass does not match'}
                } else if(matchPassword(logging.password, user.password) == false) {
                    throw { status: 400, customName: 'Email/pass does not match'}
                } else {
                    let payload = {
                        id = user.id,
                        email = user.email
                    }
                    let token = createToken(payload) 
                    return res.status(200).json({accessToken: token})
                }
            })
            .catch(err => next(err))
    }
}

module.exports = Controller