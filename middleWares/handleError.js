module.exports = function(err, req, res, next) {
    if (err.name === 'SequelizeValidationError') {
        const errors = err.errors.map(el => el.message)
        console.log(errors)
        res.status(400).json(errors)
    } else if (err.name === '') {

    } else {
        console.log(err)
        res.status(err.status || 500).json(err.message || 'Internal Server Error')
    }
}