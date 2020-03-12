const { User } = require('../models');
const jwt = require('../helpers/jwt');
const CustomError = require('../helpers/customError');
const bcrypt = require('../helpers/bcrypt');
const invalid = "invalid email / password!";

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
        let err = new CustomError(500, "belum dibuat boi!");
        next(err);
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
