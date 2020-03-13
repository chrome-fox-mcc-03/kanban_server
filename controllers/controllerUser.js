const { User } = require('./../models')

class ControllerUser {

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