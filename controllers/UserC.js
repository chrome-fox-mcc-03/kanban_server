const { User } = require('../models');
const jwt = require('../helpers/jwt');
const CustomError = require('../helpers/customError');
const bcrypt = require('../helpers/bcrypt');
const invalid = "invalid email / password!";
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class Controller {
    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
            where: {
                email
            }
        })
            .then((result) => {
                console.log(result);
                if (result) {
                    console.log(password, result.password);
                    console.log(bcrypt.compare(password, result.password));
                    if (bcrypt.compare(password, result.password)) {
                        let payload = {
                            id: result.id
                        }
                        payload = jwt.createToken(payload);
                        res.status(201).json({ token: payload })
                    } else {
                        throw new CustomError(400, invalid)
                    }
                } else {
                    throw new CustomError(400, invalid)
                }
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }

    static loginGoogle(req, res, next) {
        let token = req.headers.token;
        let isNew = false;
        let email = "";
        client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then((result) => {
                const payload = result.getPayload();
                email = payload.email;
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(result => {
                if(result) {
                    // ketemu kirim token
                    isNew = false;
                    return result;
                } else {
                    // ga ketemu register
                    isNew = true;
                    return User.create({
                        email,
                        password: email + "g"
                    })
                }
            })
            .then(result => {
                let payload = {
                    id: result.id
                }
                payload = jwt.createToken(payload);
                let status = 200;
                if(isNew){
                    status = 201;
                }
                res.status(status).json({ token: payload })
            })
            .catch((err) => {
                err = new CustomError(500, "error in google!");
                next(err);
            });
    }

    static register(req, res, next) {
        const { email, password } = req.body;
        User.create({
            email,
            password
        })
            .then((result) => {
                let payload = {
                    id: result.id
                }
                payload = jwt.createToken(payload);
                res.status(201).json({ token: payload })
            }).catch((err) => {
                console.log(err);
                next(err);
            });
    }
}

module.exports = Controller;
