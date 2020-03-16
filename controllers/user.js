const { User } = require('../models');
const checkPass = require('../helpers/hashPassword');
const Jwt = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {
    static register(req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(result => {
                const dataUser = {
                    id: result.id,
                    email: result.email
                }
                let token = Jwt.generateToken(dataUser)
                res.status(201).json({
                    User: dataUser,
                    token
                })
            })
            .catch(err => {                                
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                password = checkPass.comparePassword(password, result.password)
                if(password) {
                let token = Jwt.generateToken({
                    id: result.id,
                    email: result.email
                })
                    res.status(200).json({
                        token
                    })
                } else {
                    next({
                        name: "not found",
                        status: 404,
                        message: "Email or password is wrong"
                    })
                }
            })

            .catch(err => {
                next({
                    name: "not found",
                    status: 404,
                    message: "Your email address is not registered"
                })
            })
    }

    static signInGoogle(req, res, next) {
        let payload;
        client.verifyIdToken({
            idToken: req.headers.token,
            audience: process.env.CLIENT_ID
        })
                .then(result => {
                    payload = result.payload
                    return User.findOne({
                        where: {
                            email: payload.email
                        }
                    })
                })
                .then(result => {
                    if(!result) {
                        return User.create({
                            email: payload.email,
                            password: "google"
                        })
                    } else {
                        return result
                    }
                })
                .then(result => {
                    let token = Jwt.generateToken({
                        id: result.id,
                        email: result.email
                    })
                    res.status(200).json({
                        token
                    })
                })
                .catch(err => {
                    next(err)
                })
    }
}

module.exports = UserController