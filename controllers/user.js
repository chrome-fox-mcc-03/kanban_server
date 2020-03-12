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
                        res.status(400).json({ status: 400, message: 'Invalid password' })
                    }
                } else {
                    res.status(400).json({ status: 400, message: 'Invalid email' })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController;