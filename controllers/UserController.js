const { User } = require('../models')
const { getToken } = require('../helpers/jwt')
const getName = require('../helpers/getName')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
    static register(req, res, next) {
        let name = req.body.name 
        if(!name) {
            name = getName(req.body.email)
        }
        User.create({
            email: req.body.email,
            name,
            password: req.body.password
        })
            .then(response => {
                let payload = {
                    id: response.id,
                    email: response.email,
                    name: response.name
                }
                let token = getToken(payload)
                res.status(201).json({token})
            })
            .catch(next)
    }
    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if(user) {
                    if(comparePassword(password, user.password)) {
                        let payload = {
                            id: user.id,
                            email: user.email,
                            name: user.name
                        }
                        let token = getToken(payload)
                        res.status(200).json({token})
                    } else {
                        next({
                            status: 401,
                            message: 'Email/Password Invalid'
                        })
                    }
                } else {
                    next({
                        status: 401,
                        message: 'Email/Password Invalid'
                    })
                }
            })
            .catch(next)
    }
}

module.exports = UserController