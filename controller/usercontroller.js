const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const encrypt = require('../helper/encrypt')

class Controller {
    static Register(req, res, next) {
        console.log(req.body)
        const Email = req.body.data.Email
        const Password = req.body.data.Password
        console.log(Email, Password);
        console.log(User.create)
        User.create({Email, Password})
            .then(function(result) {
                let Email = result.Email
                console.log(Email)
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
                    console.log({access_token, Email})
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
        console.log('masuk google login')
        let payload
        const token = req.headers.token
        console.log(token)
        console.log(client.verifyIdToken())
        const ticket = client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(function(ticket) {
                console.log('berhasil masuk google login proses then 1')
                payload = ticket.getPayload();
                const userid = payload['sub'];
                console.log(payload)
                return User.findOne({
                    where:{
                        Email: payload.email
                    }
                })
            })
            .then(function(result1) {
                if(result1) {
                    console.log('ada emailnya')
                    let access_token = jwt.sign({id: result1.id}, process.env.JWT_SECRET)
                    let Email = result1.Email
                    res.status(200).json({Email, access_token})
                }
                else{
                    console.log('create email baru')
                    User.create({
                        Email: payload.email,
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
                console.log(err)
                next(err)
            })

    }
}

module.exports = Controller