const { User } = require('../models');
const { generateToken } = require('../helpers/jwt');
const { validatePassword } = require('../helpers/bcrypt');

class UserController {
    static register(req, res, next) {
        let { name, email, password } = req.body;
        
        User.create({
            name,
            email,
            password
        })
        .then(result => {            
            let payload = {
                id: result.id,
                name: result.name,
                email: result.email
            }
            let token = generateToken(payload);
            res.status(201).json({ token });
        })
        .catch(error => {            
            next(error)
        })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        
        User.findOne({
            where: {
                email,
            }
        })
        .then(result => {
            if (result) {
                let isTrue = validatePassword(password, result.password);
                if (isTrue) {
                    let payload = {
                        id: result.id,
                        name: result.name,
                        email
                    }
                    let token = generateToken(payload);
                    res.status(200).json({ token });
                } else {
                    next({
                        status: 404,
                        message: `wrong username/password`
                    })
                }
            } else {
                next({
                    status: 404,
                    message: 'wrong username/password'
                })
            }
        })
        .catch(error => {
            next(error);            
        })
    }
}

module.exports = UserController;