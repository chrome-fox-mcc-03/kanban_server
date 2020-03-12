const { User } = require('../models')
const { checkingPassword } = require('../helpers/bcrypt')
const { generateToken }= require('../helpers/jwt')

class UserController {
    static register(req, res, next){
        let { email, password } = req.body
        console.log(password, 'INI PASSWORD YA SHAY')
        User
            .create({ email, password })
            .then(user => {
                let {id, email} = user
                res.status(201).json({id, email})
            })
            .catch(next)
    }

    static login(req, res, next){
        let { email, password } = req.body
        console.log(password, 'INI PASSWORD YA SHAY')
        User
            .findOne({
                where: {
                    email : email
                }
            })
            .then(user => {
                if(user){
                    let {id, email} = user
                    if(checkingPassword(password, user.password) === true){
                        let access_token = generateToken({id, email})
                        res.status(200).json({
                            access_token : access_token
                        })
                    }
                } else {
                    next({
                        err: 404, 
                        message: 'User not Found!'
                    })
                }
            })
            .catch(err => {
                next({
                    status: 404,
                    message: 'email / password wrong!'
                })
            })
    }
}

module.exports = UserController