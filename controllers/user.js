const { User } = require('../models')
const { checkingPassword } = require('../helpers/bcrypt')
const { generateToken }= require('../helpers/jwt')
const PRIVATKEY = process.env.PRIVATKEY
const CLIENTID = process.env.CLIENTID
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(PRIVATKEY)


class UserController {
    static register(req, res, next){
        let { email, password } = req.body
        console.log(password, 'INI PASSWORD YA SHAY')
        User
            .create({ email, password })
            .then(user => {
                let {id, email} = user
                res.status(201).json({id, email})
            })
            .catch(next)
    }

    static login(req, res, next){
        let { email, password } = req.body
        console.log(password, 'INI PASSWORD YA SHAY')
        User
            .findOne({
                where: {
                    email : email
                }
            })
            .then(user => {
                if(user){
                    let {id, email} = user
                    if(checkingPassword(password, user.password) === true){
                        let access_token = generateToken({id, email})
                        res.status(200).json({
                            access_token : access_token
                        })
                    }
                } else {
                    next({
                        err: 404, 
                        message: 'User not Found!'
                    })
                }
            })
            .catch(err => {
                next({
                    status: 404,
                    message: 'email / password wrong!'
                })
            })
    }

    static findOne(req, res, next){
        let { email } = req.body
        console.log(req.body)
        User
            .findOne({
                where : {
                    email : email
                }
            })
            .then(user => {
                if(user){
                    res.status(200).json({
                        id: user.id,
                        email : user.email
                    })
                } else {
                    next({
                        status: 404,
                        message: 'User Not Found!'
                    })
                }
            })
            .catch(next)
    }

    static googleSignIn(req, res, next) {
        console.log('KE HIT NEEEEHHH++++++++++++++++++++++++')
        let email = ""
        let newUser = {}
        client 
            .verifyIdToken({
                idToken : req.headers.access_token,
                audience : CLIENTID
            })
            .then( googleUser => {
                newUser = {
                    email: googleUser.payload.email,
                    password: process.env.GOOGLE_PASSWORD
                }
                email = googleUser.payload.email

                return User.findOne({
                     where : {
                         email: email
                      }
                })
            })
            .then( data => { 
                if(!data) {
                    return User.create(newUser)
                } else return data
            })
            .then(data => {
                let payload = {
                    id: data.id,
                    email: email
                };
                let access_token = generateToken(payload);
                res.status(200).json({
                    access_token : access_token
                });
            })
            .catch(next)
    }
}

module.exports = UserController