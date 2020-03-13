const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { decryptPassword } = require('../helpers/bcrypt')

class UserController {
    static register(req, res, next) {
        let input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(input)
            .then(result => {
                const user = {
                    id: result.id,
                    email: result.email
                }
                let access_token = generateToken(user)
                let data = {
                    access_token,
                    user
                }
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static login(req, res, next) {
        const email = req.body.email
        const password = req.body.password
        User.findOne({ where: { email } })
            .then(result => {
                if (result) {
                    const pw = decryptPassword(password, result.password)
                    if (pw) {
                        const payload = {
                            id: result.id,
                            email: result.email
                        }
                        const access_token = generateToken(payload)
                        const data = {
                            access_token,
                            user: payload
                        }
                        res.status(200).json(data)
                    }
                    else {
                        next({
                            status: 400,
                            message: 'email/password wrong'
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: 'email/password wrong'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        const { id_token } = req.body
        client
            .verifyIdToken({
                idToken: id_token,
                audience: process.env.CLIENT_ID
            })
            .then(result => {
                const { email } = result.payload
                User.findOne({ where: { email } })
                    .then(user => {
                        if (user) {
                            const isGoogleAuth = decryptPassword(
                                process.env.GOOGLE_PASSWORD,
                                user.password
                            )
                            if (isGoogleAuth) {
                                const payload = {
                                    id: user.id,
                                    email: user.email
                                }
                                const message = 'Successfully logged in.'
                                const access_token = generateToken(payload)
                                res.status(200).json({ access_token, message })
                            } else {
                                next({ name: 'AlreadyRegistered' })
                            }
                        } else {
                            const newUser = {
                                email,
                                password: process.env.GOOGLE_PASSWORD
                            }

                            User.create(newUser)
                                .then(result => {
                                    const payload = {
                                        id: result.id,
                                        email: result.email
                                    }
                                    const message = 'Successfully logged in.'
                                    const access_token = generateToken(payload)
                                    res.status(200).json({ access_token, message })
                                })
                                .catch(next)
                        }
                    })
                    .catch(next)
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = UserController