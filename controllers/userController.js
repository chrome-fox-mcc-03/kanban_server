const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwtoken')
const { OAuth2Client } = require('google-auth-library')
const client_id = process.env.G_ID
const client = new OAuth2Client(client_id)

class UserController {
    static register(req, res, next){
        const { name, email, password } = req.body
        console.log(name, email, password)
        User.create({
            name: name,
            email: email,
            password: password
        })
        .then((userCreated) => {
            res.status(201).json({
                userCreated
            })
        }).catch((err) => {
            const error = {
                status : 400,
                message: `Failed to create new user!`
            }
            res.status(401).json({
                error
            })
        });
    }

    static login(req, res, next){

        const {email} = req.body
        console.log(email)

        User.findOne({
            where: {
                email : email
            }
        })
        .then((userFound) => {
            console.log(userFound);
            if(userFound){
                const password = req.body.password
    
                const payload = {
                    id: userFound.id,
                    email: userFound.email
                }
                const isPassValid = checkPassword(password, userFound.password)
                console.log(isPassValid);
                
                if(isPassValid){
                    const access_token = signToken(payload)
                    req.headers.access_token = access_token
    
                    res.status(200).json({
                        access_token
                    })
                }else{
                    const error = {
                        status : 400,
                        message : `invalid email / password!`
                    }
                    throw error
                }
            }else{
                const error = {
                    msg : 'user not found'
                }
                throw error
            }
        }).catch((err) => {
            next(err)
        });
    }

    static logout(req, res, next){
        
    }

    static loginGoogle(req, res, next){
        let data = ''
        
        client.verifyIdToken(
            {
                idToken: req.headers.token,
                audience: client_id
            }
        )
        .then(result => {
            data = result.payload
            
            return User.findOne({
                where: {
                    email: data.email
                }
            })
        })
        .then( userFound => {
            
            if(userFound){
                return userFound
            }else{
                return User.create({
                    name: 'userGoogle',
                    email: data.email,
                    password: process.env.PASSWORD_GOOGLE
                })
            }
        })
        .then(userCreated => {
            let payload = {
                id: userCreated.id,
                email: userCreated.email
            }

            let access_token = signToken(payload)
            res.status(200).json(
                {
                    'access_token':access_token
                })
        })
        .catch(err => {
            next(err)
        })

    }

}

module.exports = {
    UserController
}