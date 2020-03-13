const {User} = require('../models');
const {getToken,comparePassword} = require('../helpers/helper')
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
}

module.exports = UserController