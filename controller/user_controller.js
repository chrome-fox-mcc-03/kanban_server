const { User } = require('../models');
const { generateToken } = require('../helpers/jwt');
const { validatePassword } = require('../helpers/bcrypt');
const { OAuth2Client } = require('google-auth-library');


class UserController {
    static register(req, res, next) {
        let { name, email, password } = req.body;
        console.log(req.body);
        
        User.create({
            name,
            email,
            password
        })
            .then(result => {
                let payload = {
                    id: result.id,
                    name: result.name,
                    email: result.email
                }
                let token = generateToken(payload);
                res.status(201).json({ token });
            })
            .catch(error => {
                
                next(error)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body;

        User.findOne({
            where: {
                email,
            }
        })
            .then(result => {
                if (result) {
                    let isTrue = validatePassword(password, result.password);
                    if (isTrue) {
                        let payload = {
                            id: result.id,
                            name: result.name,
                            email
                        }
                        let token = generateToken(payload);
                        res.status(200).json({ token });
                    } else {
                        next({
                            status: 400,
                            message: `wrong username/password`
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: 'wrong username/password'
                    })
                }
            })
            .catch(error => {
                next(error);
            })
    }

    static googleLogin(req, res, next) {
        
        let id_token = req.headers.token;
        console.log(id_token);
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let googleAccount
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
            .then(result => {
                googleAccount = result.payload.email
                return User.findOne({
                    where: {
                        email: googleAccount
                    }
                });
            })
            .then(result => {
                if (result) {
                    
                    let data = {
                        id: result.id,
                        email: result.email,
                        name: result.email,
                    }
                    let token = generateToken(data)
                    res.status(201).json({ token });
                } else {
                    return User.create({
                        name: 'google',
                        email: googleAccount,
                        password: 'admin',
                    })
                }
            })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                console.log(error);
                next({ error });
            })


    }
}

module.exports = UserController;