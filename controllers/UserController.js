const { User, Priority } = require('../models/index')
const appError = require('../helper/appError');
const { compareHash } = require('../helper/bcrypt');
const { getToken, getPayload } = require('../helper/jwt');

class UserController {
    static register (req, res, next) {
        let obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            avaurl: req.body.avaurl
        }
        User.create(obj)
        .then(result => {
            let payload = {
                id: result.id,
                email: result.email,
            }
            let body = {
                message: "Account created",
                token: getToken(payload),
                name: result.name,
                avaurl: result.avaurl,
                email: result.email
            }
            res.status(201).json(body);
        })
        .catch(next);
    }
    static login (req, res, next) {
        let { email, password } = req.body;
        if (!email || !password) {
            next(appError(400, "Email & password are required"));
        }
        User.findOne({
            where: {
                email
            }
        })
        .then(result => {
            if (result) {
                let dbHash = result.password;
                let payload = {
                    id: result.id,
                    email: result.email,
                }
                if (compareHash(password, dbHash)) {
                    res.status(200).json({
                        message: "Login success",
                        token: getToken(payload),
                        name: result.name,
                        avaurl: result.avaurl,
                        email: result.email
                    })
                } else {
                    next(appError(400, "Wrong email/password"));
                }
            } else {
                next(appError(400, "Wrong email/password"));
            }
        })
        .catch(next);
    }
    static cekLogin (req, res, next) {
        const token = req.headers.token;
        let payload = getPayload(token);
        User.findOne({
            where: {
                id: payload.id,
                email: payload.email
            }
        })
        .then(result => {
            if (result) {
                res.status(200).json({
                    message: "Login success",
                    token: getToken(payload),
                    name: result.name,
                    avaurl: result.avaurl,
                    email: result.email
                })
            } else {
                res.status(404).json({
                    user: null
                })
            }
        })
        .catch(next);
    }
    static getUsers (req, res, next) {
        User.findAll()
        .then(result => {
            res.status(200).json({users: result});
        })
        .catch(next);
    }
    static getPriorities (req, res, next) {
        Priority.findAll()
        .then(result => {
            let listPrio = result.map(item => {
                return {name: item.name, id: item.id}
            });
            res.status(200).json({
                priority: listPrio
            })
        })
        .catch(next);
    }
};

module.exports = UserController;