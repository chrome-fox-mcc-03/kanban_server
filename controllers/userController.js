const {User} = require('../models');
const {getToken,comparePassword} = require('../helpers/helper')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.client_id);

class UserController {
    static register(req,res,next) {
        let {email,password} = req.body
        User.create({
            email,
            password
        })
        .then((result) => {
            let {id,email} = result.dataValues
            let token = getToken({id,email})
            req.headers.token = token
            res.status(200).json({token,email,id})    
        }).catch((err) => {
            next(err)
        });

    }

    static login(req,res,next) {
        let {email,password} = req.body
        User.findOne({
            where:{email}
        })
        .then((result) => {
            if(result) {
                let compared = comparePassword(password,result.dataValues.password)
                if(compared) {
                    let {id,email} = result.dataValues
                    let token = getToken({id,email})
                    req.headers.token = token
                    res.status(200).json({token,email,id})
                }else{
                    next({status:400,message:'Email/password wrong'})
                }    
            }else{
                next({status:400,message:'Email/password wrong'})
            }
        }).catch((err) => {
            next(err)
        });
    }

    static loginGoogle(req,res,next) {
        let {password,id_token} = req.body
        let email = null
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.client_id
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];User.findOne({
                where:{
                    email
                }
            })
            .then((result) => {
                if(result) {
                    let {id,email} = result.dataValues
                    let token = getToken({id,email})
                    req.headers.token = token
                    res.status(200).json({token,id})
                }else{
                    return User.create({
                        email,
                        password
                    })
                }
            })
            .then((result) => {
                if(result){
                    let {id,email} = result.dataValues
                    let token = getToken({id,email})
                    req.headers.token = token
                    res.status(200).json({token,id})
                }
            })
            .catch((err) => {
                next(err)
            });
        }
        verify().catch(console.error);
    }
}

module.exports = UserController