const { User } = require('../models/index');
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class UserController {

    static login(req, res, next) {
        const {
            email,
            password
        } = req.body

        User.findOne({
                where: {
                    email
                }
            })
            .then(response => {
                if (comparePassword(password, response.password)) {
                    const payload = {
                        id: +response.id,
                        email: response.email,
                        fullname: response.fullname
                    }
                    const token = generateToken(payload);
                    res.status(200).json({
                        token,
                        fullname: payload.fullname
                    })
                } else {
                    next({
                        status: 400,
                        msg: "Email / Password invalid!"
                    })
                }
            })
            .catch(err => {
                next({
                    status: 400,
                    msg: "Email / Password invalid!"
                })
            })
    }

    static register(req, res, next) {
        const {
            email,
            password,
            fullname
        } = req.body

        User.create({
                email,
                password,
                fullname
            })
            .then(response => {
                const payload = {
                    id: response.id,
                    email: response.email,
                    fullname: response.fullname
                }

                const token = generateToken(payload);

                res.status(201).json({
                    token
                })

            })

            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next) {
        const idToken = req.body.id_token

        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let data;
        client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            .then(ticket => {
                data = ticket.getPayload()
                const email = data.email
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(result => {
                if (!result) {
                    return User.create({
                        email: data.email,
                        fullname: data.name,
                        password: `${data.email}+`,
                    })
                } else {
                    return result
                }
            })
            .then(result => {
                const newPayload = {
                    id: result.id,
                    fullname: result.fullname,
                    email: result.email,
                    
                }
                const token = generateToken(newPayload)
                res.status(201).json({
                    token, 
                    fullname: newPayload.fullname
                })
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = UserController