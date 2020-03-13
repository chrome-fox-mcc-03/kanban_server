const {
    OAuth2Client
} = require('google-auth-library');
const {
    User
} = require('../models/index')

const {
    Compare
} = require('../helpers/bcrypt')

const {
    genToken
} = require('../helpers/jwt')
class Controller {

    static register(req, res, next) {
        let {
            name,
            email,
            password
        } = req.body
        User.create({
            name,
            email,
            password
        }).then(result => {
            let data = {
                id: result.id,
                name: result.name,
                email: result.email,
            }
            res.status(200).json(data)
        }).catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        let {
            email,
            password
        } = req.body
        User.findOne({
            where: {
                email: email
            }
        }).then(result => {
            let login = Compare(password, result.password)
            if (login) {
                let payload = {
                    id: result.id,
                    email: result.email
                }
                let token = genToken(payload)
                res.status(200).json(token)
            } else {
                next({
                    status: 400,
                    msg: 'Email/Password is wrong'
                })
            }
        }).catch(err => {
            next({
                status: 400,
                msg: 'Email/Password is wrong'
            })
        })
    }

    static gooSignIn(req, res, next) {
        const emailCheck = {}
        let nameGoogle
        const client = new OAuth2Client(process.env.CLIENT_ID);
        const token = req.headers.token
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
            // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
            .then(ticket => {
                let payLoad = ticket.getPayload()
                nameGoogle = payLoad.name
                emailCheck.email = payLoad.email
                return User.findOne({
                    where: {
                        email: emailCheck.email
                    }
                })
            })
            .then(user => {
                if (user) {
                    User.findOne({
                        where: {
                            email: emailCheck.email
                        }
                    })
                        .then(result => {
                            let checkPass = Compare(process.env.password, result.password)
                            if (checkPass) {
                                let payLoad = {
                                    id: result.id,
                                    email: result.email
                                }
                                let token = genToken(payLoad)
                                res.status(200).json(token)
                            } else res.status(400).json('email / password is Wrong')
                        })
                } else {
                    User.create({
                        name: nameGoogle,
                        email: emailCheck.email,
                        password: process.env.password,
                    })
                        .then(result => {
                            let payload = {
                                id: result.id,
                                email: result.email
                            }
                            let token = genToken(payload)
                            res.status(200).json(token)
                        })
                        .catch(err => {
                            next({
                                status: 500,
                                msg: {
                                    err: "Internal Server Error"
                                }
                            })
                        })
                }
            })
            .catch(err => {
                next({
                    status: 500,
                    msg: {
                        err: 'Internal Server Error'
                    }
                })
            })

    }
}

module.exports = Controller