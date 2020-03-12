const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const encrypt = require('../helper/encrypt')

class Controller {
    static Register(req, res, next) {
        console.log(req.body)
        const Email = req.body.data.email
        const Password = req.body.data.password
        console.log(Email, Password);
        console.log(User.create)
        User.create({Email, Password})
            .then(function(result) {
                console.log('berhasil register')
                let Email = result.Email
                res.status(200).json(Email)
            })
            .catch(function(err) {
                next(err)
            })

    }

    static Login(req, res, next) {

        let Email = req.body.data.Email
        let Password = req.body.data.Password
        User.findOne({
            where: {
                Email: Email
            }
        })
            .then(function(result) {
                console.log(bcrypt.compareSync(Password, result.Password))
                if(bcrypt.compareSync(Password, result.Password)) {
                    let access_token = jwt.sign({
                        id: result.id,
                        Email: result.Email
                    }, process.env.JWT_SECRET)
                    let Email = result.Email;
                    res.status(200).json({access_token, Email})
                }
                else {
                    let err = {
                        msg: "Wrong Username & Password"
                    }
                    throw err
                }
            })
            .catch(function(err) {
                next(err)
            })
    }
    static GoogleLogin(req, res, next) {
        let payload
        const token = req.headers.access_token
        const ticket = client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(function(ticket) {
                payload = ticket.getPayload();
                const userid = payload['sub'];
                return User.findOne({
                    where:{
                        Email: payload.email
                    }
                })
            })
            .then(function(result1) {
                if(result1) {
                    let access_token = jwt.sign({id: result1.id}, process.env.JWT_SECRET)
                    let Email = result1.Email
                    res.status(200).json({Email, access_token})
                }
                else{
                    User.create({
                        Email: payload.Email,
                        Password: encrypt("Default")
                    })
                        .then(function(result) {
                            let Email = result.Email
                            res.status(200).json(Email)
                        })
                        .catch(function(err) {
                            next(err)
                        })
                }
            })
            .catch(function(err) {
                next(err)
            })

    }
}

module.exports = Controller