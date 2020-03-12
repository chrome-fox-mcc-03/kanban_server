"use strict"

const { User } = require('../models/index')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class Controller {
    static signUp(req, res, next){
        const data = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        }

        if(data.password !== req.body.confirmPassword){
            throw ({
                statusCode: 400,
                msg: 'Password do not matches.'
            })
        }
        else {
            User.findOne({
                where: {
                    email: data.email
                }
            })
            .then(result => {
                if(result){
                    throw ({
                        statusCode: 400,
                        msg: 'Email already been used.'
                    })
                }
                else{
                    return User.findOne({
                        where: {
                            username: data.username
                        }
                    })
                }
            })
            .then(result => {
                if(result) {
                    throw ({
                        statusCode: 400,
                        msg: 'Username already been used.'
                    })
                }
                else {
                    return User.create(data)
                }
            })
            .then(result => {
                const dataToShow = {
                    email: data.email,
                    username: data.username,
                    name: data.name,
                }
                res.status(201).json({data: dataToShow})
            })
            .catch(next)
        }

    }

    static signIn(req, res, next){
        const email = req.body.email
        const password = req.body.password
        const key = (/@/.test(email)) ? 'email' : 'username'

        User.findOne({
            where: {
                [key]: email
            }
        })
        .then(result => {
            if(!result){
                throw({
                    statusCode: 400,
                    msg: 'Username/Email do not exists.'
                })
            }else {
                if(comparePassword(password, result.password)){
                    const token = generateToken(result.id)
                    res.status(200).json({token})
                }
                else{
                    throw ({
                        statusCode: 400,
                        msg: 'Password is not correct.'
                    })
                }
            }
        })
        .catch(next)

    }

    static googleSignin(req, res, next){


    }

}

module.exports = Controller