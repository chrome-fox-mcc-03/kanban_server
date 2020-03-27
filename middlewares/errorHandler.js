
function errorHandler(err, req, res, next) {
    let status 
    let message
    switch (err.name) {
        case 'Email or Password Invalid!':
            message = {
                error: err.name
            }
            status = 400
            break;
        case 'SequelizeDatabaseError':
            message = {
                error: "Database Error"
            }
            status = 500
            break;
        case 'JsonWebTokenError':
            message = {
                error: "You are not authenticated!"
            }
            status = 400
            break;
        case 'SequelizeValidationError':
            message = {
                error: err.errors[0].message
            }
            status = 400
            break;
        case 'Task not found':
            message = {
                error: err.name
            }
            status = 400
            break;
        case "You are not authorized":
            message = {
                error: err.name
            }
            status = 401
            break;
        case "User not found":
            message = {
                error: err.name
            }
            status = 400
            break;
        case "Authentication Error":
            message = {
                error: err.name
            }
            status = 400
            break;
        case "You are not authenticated to do such thing":
            message = {
                error: err.name
            }
            status = 400
            break;
        case "SequelizeUniqueConstraintError":
            message = {
                error: "Email already in use"
            }
            status = 400
            break;    
        default:
            console.log(err)
            message = {
                error: "Database Error"
            }
            status = 500
            break;
    }
    res.status(status).json(message)
}

module.exports = errorHandler