const {Sequelize} = require("../models")
const customError = require("../helpers/errorModel.js")

function errorHandling(err, req, res, next) {
    if(err instanceof Sequelize.EmptyResultError) {
        res.status(404).json({message: err.message})
    } else if(err instanceof Sequelize.ValidationError) {
        let msg = err.errors.map(el => el.message)
        res.status(400).json({message: msg})
    } else if (err instanceof Error) {
        res.status(err.code).json({message: err.message})
    } else {
        res.status(err.status || 500).json({message: err.message || "INTERNAL SERVER ERROR"})
    }
}

module.exports = errorHandling