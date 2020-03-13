"use strict"

const { User } = require('../models/index')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const {GoogleAuth, OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const sendMail = require('../helper/restdb')

class Controller {
    static findUser(req, res, next){
        User.findOne({
            where:{
                username: req.params.username
            }
        })
        .then(result => {
            if(result.id == req.decoded.id){
                res.json({msg: 'You cannot add yourself!'})
            }
            if(result){
                res.json(result)
            }else{
                res.json({msg: 'Not found'})
            }
        })
        .catch(next)
    }
    static signUp(req, res, next){
        for(const key in req.body){
            if(!req.body[key]){
                req.body[key] = null
            }
        }
        const data = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        }

        if(data.password !== req.body.passwordConfirm){
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
                    password: data.password
                }
                sendMail(dataToShow)
                res.status(201).json({data: dataToShow})
            })
            .catch(next)
        }

    }

    static signIn(req, res, next){
        for(const key in req.body){
            if(!req.body[key]){
                req.body[key] = null
            }
        }
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

    static googleSignIn(req, res, next){
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: req.headers.user_token,
                audience: process.env.CLIENT_ID
            })
            const payload = ticket.getPayload()
            const email = payload.email
            console.log(email)
            User.findOne({
                where: {
                    email: email
                }
            })
            .then(result => {
                if(result){
                    const token = generateToken(result.id)
                    res.status(200).json({token})
                }
                else{
                    res.status(200).json({email})
                }
            })
            .catch(next)
        }
        verify()
    }

}

module.exports = Controller