const sequelize = require("sequelize")
const jwt = require('jsonwebtoken');
const { User } = require("../models")
const { checkPassword } = require("../helpers/bcrypt.js")
const { createToken } = require("../helpers/jwt.js")
const customError = require("../helpers/errorModel.js")
const { OAuth2Client } = require('google-auth-library')
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
const Op = sequelize.Op
let emailAddress
let userId
let payload
let passcode
let isLogin = false
let accessToken
let passwordMatchFlag


class UserController {

    static signup(req, res, next) {
        console.log(`>>> REGISTER <<<`);
        console.log("CREDENTIALS:");
        console.log(req.body);

        User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(result => {
            // console.log(result);
            // userId = result.dataValues.id
            // emailAddress = result.dataValues.email
           res.status(201).json({data: result, message: "Signup Success. Please Signin to Continue"})

        })
        .catch(err => {
            // console.log(`error ketemu`);
            // console.log(err);
            next(err)
        })
    }

    static login(req, res, next) {
        console.log(`>>> LOGIN <<<`);
        console.log("CREDENTIALS:");
        // console.log(req.body);
        console.log(req.body.email);
        console.log(req.body.password);
        emailAddress =  req.body.email
        passcode = req.body.password

        User.findOne({
            where: {
                email: emailAddress
            }
        })
        .then(response => {
            console.log(`Here is the login response `);
            console.log(response);
            
            if(response) {

                console.log(`response is`);
                console.log(response);

                passwordMatchFlag = checkPassword(passcode, response.password)
            // console.log(`does matching password success: ${passwordMatchFlag}`);

                if (passwordMatchFlag && response) {
                    console.log(`Password match`);
                    payload = {
                        id: response.id,
                        email: emailAddress
                    }
                    console.log(`payload is`);
                    console.log(payload);
                    accessToken = createToken(payload)

                    console.log(`generated token`);
                    console.log(accessToken);
                    req.headers.token = accessToken;
                    console.log("req.headers.token is: \n");
                    console.log(req.headers.token);
               
                    // req.payload = payload
                    res.status(200).json({token: accessToken})
                } else {
                    throw new CustomError(400, "WRONG PASSWORD/EMAIL")
                }
            } else {
                throw new CustomError(400, "WRONG PASSWORD/EMAIL")
            }
        })
        .catch(err => {
            // console.log(err);
            next(err)
        })
    }

    static googleLogin(req, res, next) {
        console.log(`>>> GOOGLE LOGIN <<<`);
        console.log("CREDENTIALS:");
        accessToken = req.headers.token
        console.log(accessToken);
        googleClient.verifyIdToken({
            idToken: accessToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            console.log(`TICKET FOUND!`);
            console.log(ticket);
            payload = ticket.getPayload();
            userId = payload['sub']
            emailAddress = payload.email

            console.log(`TICKET PAYLOAD:`);
            console.log(payload);

            return User.findAll({
                where: {
                    email: emailAddress
                }
            })


        })
        .then(result1 => {
            console.log("RESULT 1 PAYLOAD");
            console.log(result1);
            if(result1.length === 0) {

                return User.create({
                    email: emailAddress,
                    password: "leviathan" //leviathan
                })
            } else {
                return result1[0]
            }
        })
        .then(result2 => {
            payload = {
                id: result2.id,
                email: result2.email,
            }
            console.log(`RESULT 2 PAYLOAD:`);
            console.log(payload);

            // accessToken = generateToken(payload)
            // console.log(`after result2, accessToken is`);
            // console.log(accessToken);
            // req.headers.token = accessToken
            res.status(200).json({token: generateToken(payload)})
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = UserController