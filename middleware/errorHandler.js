"use strict"

module.exports = function(err, req, res, next){
    if(err.name){
        switch(err.name){
            case "SequelizeConnectionError":
                res.status(500).json(err)
                break
            case "SequelizeValidationError":
                res.status(400).json(err)
                break
            case "SequelizeDatabaseError": 
                res.status(400).json(err)
                break
            default:
                res.status(500).json(err)
                break
            
        }
    }
    if(err.statusCode){
        res.status(err.statusCode).json(err)
    }
}