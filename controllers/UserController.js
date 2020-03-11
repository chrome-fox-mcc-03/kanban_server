const { User } = require('../models') ;
const { checkPassword } = require('../helpers/bcrypt') ;
const { getToken } = require('../helpers/jwt') ;


class UserController {
    static register (req,res,next) {

        User.findOne ({
            where : {
                email : req.body.email
            }
        })
            .then ((response)=>{
                if (response) {
                    next ( {
                        status : 400,
                        message : 'User already exist'
                    })
                } else {

                    const query = req.body.name.replace(/ /g, "+") ;

                    let newUser = {
                        name : req.body.name,
                        email : req.body.email,
                        password : req.body.password,
                        avatarUrl : `https://ui-avatars.com/api/?name=${query}&background=0D8ABC&color=fff`
                    }
                    return User.create (newUser)   
                }
            })

            .then ((newUser)=>{
                const payload = {
                    id : newUser.id,
                    name : newUser.name,
                    email : newUser.email
                }

                const access_token = getToken (payload)
                res.status(201).json({
                    access_token : access_token
                })
            })

            .catch ((err)=>{
                next(err)
            })
    }

    static login (req,res,next) {

        const emailLogin = req.body.email ;
        const passwordLogin = req.body.password ;

        User.findOne({
            where : {
                email : emailLogin
            }
        })
            .then ((response)=>{
                if(!response){
                    next ( {
                        status : 400,
                        message : 'Wrong email/password'
                    })
                } else {
                    const checkPW = checkPassword(passwordLogin,response.password) ;

                    if (checkPW) {
                        const payload = {
                            id : response.id,
                            name : response.name,
                            email : response.email
                        }
                        const access_token = getToken (payload)
                        res.status(200).json({
                            access_token : access_token
                        })
                    } else {
                        next ( {
                            status : 400,
                            message : 'Wrong email/password'
                        })
                    }
                }
            })

            .catch ((err)=>{
                next(err)
            })
    }
}

module.exports = UserController