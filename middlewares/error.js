module.exports = (err, req, res, next) => {
    if(err.name == 'SequelizeValidationError') {
        res.status(400).json(err.errors[0].message);
    } else if (err.name == 'SequelizeUniqueConstraintError') {
        res.status(400).json(err.errors[0].message)
    } else if (err.message == 'invalid signature') {
        res.status(404).json(err.message)
    } else {
        res.status(err.status).json(err.message);
    }   
}