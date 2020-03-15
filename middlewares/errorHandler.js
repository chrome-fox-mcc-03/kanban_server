module.exports = function(err, req, res, next) {
    if(err.name == 'JsonWebTokenError') {
        res.status(401).json({ message: `You Dont Have Authorization`})
    } else if (err.name == 'SequelizeValidationError') {
        message = err.errors.map(el => el.message)
        res.status(400).json({ message })
    } else if(err.name === 'SequelizeUniqueConstraintError') {
        message = err.errors.map(el => el.message)
        res.status(400).json({ message })
    }
    else res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' })
}