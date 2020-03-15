const {Label} = require('../models')

class labelController {

    static addLabel(req,res,next) {
        let {inputAddLabel,selectColorLabel} = req.body
        let {id} = req.params
        
        Label.create({
            name:inputAddLabel,
            color:selectColorLabel,
            TodoId:id
        })
        .then((result) => {
            res.status(200).json(result)    
        }).catch((err) => {
            next(err)
        });
    }

    static deleteLabel(req,res,next) {
        let {id} = req.params
        Label.destroy({
            where:{id}
        })
        .then((result) => {
            res.status(200).json(result)    
        }).catch((err) => {
            next(err)
        });
    }
}

module.exports = labelController