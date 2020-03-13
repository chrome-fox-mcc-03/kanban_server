const { User } = require('../models') ;
const { checkPassword } = require('../helpers/bcrypt') ;
const { getToken } = require('../helpers/jwt') ;
const { OAuth2Client } = require('google-auth-library');


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
                        message : ['Email already used']
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
                    access_name : newUser.name,
                    access_avatarUrl : newUser.avatarUrl, 
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
                        message : ['Wrong email/password']
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
                            access_name : response.name,
                            access_avatarUrl : response.avatarUrl, 
                            access_token : access_token
                        })
                    } else {
                        next ( {
                            status : 400,
                            message : ['Wrong email/password']
                        })
                    }
                }
            })

            .catch ((err)=>{
                next(err)
            })
    }

    static googleSignin ( req, res, next) {
        const access_token = req.headers.access_token ;
        const CLIENT_ID = process.env.GOOGLE_CLIENTID ;
        const client = new OAuth2Client(CLIENT_ID);

        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: access_token,
                audience: CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const email = payload['email'];
            const name = payload['name'];

            User.findOne ( {
                where : {
                    email : email
                }
            })
                .then ( (response)=> {
                    if (response) {
                        return response

                    } else {
                        const query = name.replace(/ /g, "+") ;

                        return User.create ({
                            name : name,
                            email : email,
                            password : process.env.DEFAULT_PASSWORD_GOOGLEUSER,
                            avatarUrl : `https://ui-avatars.com/api/?name=${query}&background=0D8ABC&color=fff`
                        })
                    }
                })

                .then ( (response) => {
                    const payload = {
                        id : response.id,
                        name : response.name,
                        email : response.email
                    }

                    const access_token = getToken (payload)

                    res.status(200).json({
                        access_name : response.name,
                        access_avatarUrl : response.avatarUrl, 
                        access_token : access_token
                    })
                })
          }
          verify().catch((err)=>{
              next(err)
          });


    }
}

module.exports = UserController