const { verifyToken } = require('../helpers/jwt.js');
const { User } = require('../models/index.js');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token;
        req.decoded = verifyToken(token);
        console.log(req.decoded);
        let email = req.decoded.email
        
        User.findOne({
            where: { email }
        })
            .then(response => {
                if(response) {
                    next()
                }

                return null
            })
            .catch(err => {
                next(err)
            })
            
    } 
    catch (error) {
        next({
            status: 401,
            msg: "Authentication failed! Please re-login"
        })
    }
}