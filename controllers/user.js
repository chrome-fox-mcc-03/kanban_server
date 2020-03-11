const { User } = require('../models/index');
const { generateToken } = require('../helpers/jwt');

class UserController {
    static signup(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(userFound => {
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
                            res.status(500).json({ err })
                        })
                } else {
                    res.status(400).json({ status: 400, message: 'Your email is already registered' })
                }
            })
            .catch(err => {
                res.status(500).json({ err })
            })
    }

    static signin(req, res, next) {
    }
}

module.exports = UserController;