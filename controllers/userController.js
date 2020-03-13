const {
    User
} = require('../models/index')

const {
    Compare
} = require('../helpers/bcrypt')

const {
    genToken
} = require('../helpers/jwt')
class Controller {

    static register(req, res, next) {
        let {
            name,
            email,
            password
        } = req.body
        User.create({
            name,
            email,
            password
        }).then(result => {
            let data = {
                id: result.id,
                name: result.name,
                email: result.email,
            }
            res.status(200).json(data)
        }).catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        let {
            email,
            password
        } = req.body
        console.log(req.body, 'email dan password');

        User.findOne({
            where: {
                email: email
            }
        }).then(result => {
            let login = Compare(password, result.password)
            if (login) {
                let payload = {
                    id: result.id,
                    email: result.email
                }
                let token = genToken(payload)
                res.status(200).json(token)
            } else {
                next({
                    status: 400,
                    msg: 'Email/Password is wrong'
                })
            }
        }).catch(err => {
            next({
                status: 400,
                msg: 'Email/Password is wrong'
            })
        })
    }
}

module.exports = Controller