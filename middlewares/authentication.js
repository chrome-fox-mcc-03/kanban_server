const { User } = require('../models');
const { validateToken } = require('../helpers/jwt');

module.exports = (req, res, next) => {
    let token = req.headers.token;   
    
    if (token) {
        let data = validateToken(token);
        req.decoded = data;
        
        if (data.message == 'invalid signature') {
            next(data);
        } else {
            User.findOne({
                where: {
                    email: data.email
                }
            })
            .then(result => {                
                next();
            })
            .catch(error => {
                next(error);
            })
        }
    } else {
        next({
            status: 400,
            message: `invalid signature`
        })
    }
}