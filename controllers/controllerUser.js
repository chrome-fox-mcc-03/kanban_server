const { User } = require('./../models')
const { comparePass } = require('./../helpers/bcrypt')
const { generateToken } = require('./../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

class ControllerUser {

    static login (req, res, next) {
        const { email,password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (!result) {
                    const error = {
                        name: "Email or Password Invalid!"
                    }
                    throw error
                } else {
                    const isTrue = comparePass(password, result.password)
                        if (!isTrue) {
                            const error = {
                                name: "Email or Password Invalid!"
                            }
                            throw error
                        } else {
                            const payload = {
                                id: result.id,
                                first_name: result.first_name,
                                last_name: result.last_name,
                                email: result.email,
                                role: result.role
                            }
                            const token = generateToken(payload)
                            req.headers.token = token
                            res.status(200).json({ token })
                        }
                }
            })
            .catch(err => {
                next(err)
            })
    }
    
    static loginGoogle (req, res, next) {
        const { id_token } = req.body       
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        console.log()
        console.log('===========')
        console.log(process.env.GOOGLE_CLIENT_ID)
        console.log('===========')
        console.log()
        let data
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(ticket => {
                const payload = ticket.getPayload() 
                const emailUser = payload.email
                data = payload
                console.log(payload)
                return User.findOne({
                    where: {
                        email: emailUser
                    }
                })
                
            })
            .then(response => {
                if (!response) {
                    const email = data.email
                    const first_name = data.given_name
                    const last_name = data.family_name || 'Google'
                    const password = 'KanbaNology'
                    const role = 'staff' 
                    return User.create({
                        first_name,
                        last_name,
                        email,
                        password,
                        role
                    })
                } else {
                    return response
                }
            })
            .then(response => {
                const payloadBaru = {
                    id: response.id,
                    first_name: response.first_name,
                    last_name: response.last_name,
                    email: response.email,
                    role: response.role
                }
                const token = generateToken(payloadBaru)
                req.headers.token = token
                res.status(200).json({ token })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static getUsers (req, res,next) {
        User.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }
    
    static addUser (req, res, next) {
            const { first_name,last_name,email,password,role } = req.body
            User.create({ 
                first_name,
                last_name,
                email,
                password,
                role
            })
                .then(user => {
                    res.status(201).json(user)
                })
                .catch(err => {
                    next(err)
                })
    }

    static getById (req, res, next) {
        const id = req.params.id
        User.findByPk(id)
            .then(user => {
                if (!user) {
                    const error = {
                        name: "User not found"
                    }
                    throw error
                } else {
                    res.status(200).json(user)
                }
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static getByEmail (req, res, next) {
        const email = req.params.email
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if (!user) {
                    const error = {
                        name: "User not found"
                    }
                    throw error
                } else {
                    res.status(200).json(user)
                }
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static update (req, res, next) {
        const id = req.params.id
        const { first_name,last_name,email,password,role } = req.body
        User.update({
            first_name,
            last_name,
            email,
            password,
            role
        }, {
            where: {
                id
            },
            returning: true
        })
            .then(result => {
                if (result[1].length === 0) {
                    const error = {
                        name: "User not found"
                    }
                    throw error
                } else {
                    const user = result[1][0]
                    console.log(result)
                    res.status(201).json(user)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static delete (req, res, next) {
        const id = req.params.id
        let user
        User.findByPk(id)
            .then(result => {
                if (!result) {
                    const error = {
                        name: "User not found"
                    }
                    throw error
                } else {
                    user = result
                    User.destroy({
                        where: {
                            id
                        }
                    })
                }
            })
            .then(deleted => {
                res.status(203).json(user)
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = ControllerUser