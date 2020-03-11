const { User } = require('../models/index')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')
const { OAuth2Client } = require('google-auth-library')

class Controller {
    static signin(req, res, next) {
        const emailSignin = req.body.email
        const passwordSignin = req.body.password
        User.findOne({
            where: {
                email: emailSignin
            }
        })
            .then(user => {
                if(user && comparePassword(passwordSignin, user.password)) {
                    const access_token = generateToken({id: user.id, email: user.email})
                    res.status(200).json({id: user.id, email: user.email, access_token})
                } else {
                    next({
                        status: 400,
                        message: {
                            error: 'Email or Password wrong'
                        }
                    })
                }
            })
            .catch(err => next(err))
    }

    static signup(req, res, next) {
        const emailSignup = req.body.email
        const passwordSignup = req.body.password
        User.findOne({
            where: {
                email: emailSignup
            }
        })
            .then(user => {
                if(user) {
                    throw ({
                        status: 400,
                        message: {
                            error: 'Email already been used, try anothen email'
                        }
                    })
                } else {
                    return User.create({
                        email: emailSignup,
                        password: passwordSignup
                    })
                }
            })
            .then(user => {
                const access_token = generateToken({id: user.id, email: user.email})
                res.status(201).json({id: user.id, email: user.email, access_token})
            })
            .catch(err => console.log(err))
    }

    static loginGoogle(req, res, next) {
        const { id_token } =reg.body
        const email = null
        const password = process.env.PASSWORD_DEFAULT

        const Client = new OAuth2Client(process.env.CLIENT_ID)
        Client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                const payload = ticket.getPayload()
                email = payload.email
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(user => {
                if(user) {
                    return user
                } else {
                    return User.create({
                        email,
                        password
                    })
                }
            })
            .then(user => {
                const access_token = generateToken({id: user.id, email: user.email})
                res.status(201).json({id: user.id, email: user.email, access_token})
            })
            .catch(err => next(err))
    }
}

module.exports = Controller