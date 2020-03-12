module.exports= (err, req, res, next) => {
    if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        let message = err.errors.map(el => el.message)
        res.status(400).json({
            errors : message
        })
    } else {
        res.status(err.status || 500).json({
            message : err.message || "Internal Server Error"
        })
    }
}