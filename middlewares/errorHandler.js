function errorHandler(err, req, res, next) { 
    if(err.name === 'SequelizeValidationError') {
        let errmsg = []
        err.errors.map(el => errmsg.push(el.message))
        return res.status(400).json(errmsg)
    }else if(err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json(err.errors[0].message)
    }
     else if(err.customName) {
        return res.status(err.status).json(err.customName) 
    } else {
        return res.status(500).json(err)
    }
 }

 module.exports = errorHandler;