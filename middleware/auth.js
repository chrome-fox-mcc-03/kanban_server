const Helper = require('../helper/helper')
const {User, UserProject} = require('../models')

class Authentication{
    static authenticationUser (req, res, next) {
        if (req.headers.token) {
            try {
                let decoded = Helper.verify(req.headers.token);
                console.log(decoded)
                User.findOne({
                    where: {id:decoded.id, email: decoded.email}
                })
                .then(data=> {
                        if(data) {
                            req.UserId = decoded.id
                            next()
                        } else {
                            res.status(401).json({message : "Please Login First"})
                        }
                    })
              } catch(err) {
                res.status(401).json({message : "Please Login First"})
              }
        } else {
            res.status(401).json({message : "Please Login First"})
        }
    }
    // static authenticationProject (req, res, next) {
    //     console.log(req.params.pId)
    //     if (req.headers.token) {
    //         try {
    //             let decoded = Helper.verify(req.headers.token);
    //             UserProject.findOne({
    //                 where: {UserId: decoded.id, ProjectId : req.params.pId}
    //             })
    //             .then(data=> {
    //                 if(data) {
    //                         req.UserId = decoded.id
    //                         req.ProjectId = data.ProjectId
    //                         next()
    //                     } else {
    //                         res.status(401).json({message : "Please Choose Project First"})
    //                     }
    //                 })
    //           } catch(err) {
    //             res.status(401).json({message : "Please Choose Project First"})
    //           }
    //     } else {
    //         res.status(401).json({message : "Please Choose Project First"})
    //     }
    // }
}

module.exports = Authentication