module.exports = function (err, req, res, next) {
    let status = 500
    let message= 'internal server error'
    let errors = 'Internal Servver error'
    if (err.name === 'SequelizeDatabaseError') {
        errors = []
        err.errors.forEach(error => {
            errors.push(error.message)
        })
        status = 400
        message = {
            message: 'Bad Request',
            errors
        }
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        errors = []
        err.errors.forEach(error => {
            errors.push('Email is already exists')
        })
        status = 400
        message = {
            message: 'Bad Request',
            errors
        }
    } else if (err.name === 'SequelizeValidationError') {
        errors = []
        err.errors.forEach(error => {
            errors.push(error.message)
        })
        status = 400
        message = {
            message: 'Bad Request',
            errors
        }
    } else if (err.name === 'loginValidation') {
        status = 400
        errors = []
        errors.push(err.msg.message)
        message = {
            message: 'Bad Request',
            errors
        }
    } else if (err.name === 'authentication') {
        status = 403
        errors = []
        errors.push(err.msg.message)
        message = {
            message: 'Bad Request',
            errors
        }
    } else if (err.name === 'authorization') {
        status = 403
        errors = []
        errors.push(err.msg.message)
        message = {
            message: 'Bad Request',
            errors
        }
    }
    res.status(status).json(message)
}