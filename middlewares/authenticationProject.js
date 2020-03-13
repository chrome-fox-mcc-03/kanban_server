const { verifyToken } = require('../helpers/jwt')
const { Project } = require('../models')

module.exports= (req, res, next) => {
    let project_id = req.headers.project_id
    try {
        console.log(project_id)
        let decoded = verifyToken(project_id)
        let {id, name} = decoded
        Project
            .findOne({
                where: {
                    name: decoded.name
                }
            })
            .then(project => {
                if(project) {
                    // console.log('berhasil iniiii')
                    req.projectId = project.id
                    next()
                } else {
                    next({
                        err: 404,
                        message: "Please login first"
                    })
                }
            })
            .catch(next)
    } catch (error) {
        next(error)
    }
}