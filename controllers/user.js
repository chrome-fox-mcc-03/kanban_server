const { User } = require('../models/index');
const { generateToken } = require('../helpers/jwt');
const { comparePassword } = require('../helpers/bcrypt');

class UserController {
    static signup(req, res, next) {
        console.log('masuk sign up');
        console.log(req.body)
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(userFound => {
                console.log(userFound)
                if (!userFound) {
                    User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    })
                        .then(newUser => {
                            const payload = { id: newUser.id, name: newUser.name, email: newUser.email };
                            const access_token = generateToken(payload);
                            res.status(201).json({ access_token })
                        })
                        .catch(err => {
                            console.log('user create error', err);
                            res.status(500).json({ err })
                        })
                } else {
                    res.status(400).json({ status: 400, message: 'Your email is already registered' })
                }
            })
            .catch(err => {
                console.log('user create catch error', err);
                res.status(500).json({ err })
            })
    }

    static signin(req, res, next) {
        console.log('>>>> SIGN IN <<<<');
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (user) {
                    const passwordMatched = comparePassword(req.body.password, user.password)
                    if (passwordMatched) {
                        console.log('>>>> SIGN IN SUCCESS <<<<');
                        const payload = { id: user.id, name: user.name, email: user.email };
                        const access_token = generateToken(payload);
                        res.status(200).json({ access_token })
                    } else {
                        res.status(400).json({ status: 400, message: 'Invalid email/password' })
                    }
                } else {
                    res.status(400).json({ status: 400, message: 'Invalid email/password' })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static googleSignIn(req, res, next) {
        let obj = {}
        const token = req.headers.token
        const { OAuth2Client } = require('google-auth-library');
        const client = new OAuth2Client(process.env.CLIENT_ID);
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(response => {
                console.log(response.payload.email);
                obj.email = response.payload.email;
                obj.name = response.payload.name;
                return User.findOne({
                    where: {
                        email: obj.email
                    }
                })
            })
            .then(user => {
                if (!user) {
                    return User.create({
                        name: obj.name,
                        email: obj.email,
                        password: process.env.DEFAULT_PASSWORD
                    })
                } else {
                    return user;
                }
            })
            .then(user => {
                const payload = { id: user.id, name: user.name, email: user.email }
                const access_token = generateToken(payload);
                res.status(201).json({ access_token })
                console.log('login google successsssss', access_token);
                
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = UserController;