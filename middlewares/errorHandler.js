const { Sequelize } = require('../models/index')
module.exports = function (err, req, res, next) {
    if (err instanceof Sequelize.ValidationError) {
        // console.log(err);
        let msg = err.errors.map(item => {
            return item.message;
        })
        res.status(400).json({
            message: msg
        })
    } else if (err instanceof Error) {
        res.status(err.code).json({
            message: err.message
        })
    }
    else {
        res.status(500).json({
            message: "Internal server error",
        })
    }
}