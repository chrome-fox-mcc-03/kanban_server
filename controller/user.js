const { User, Project, UserProject} = require('../models')
const {Op} = require('sequelize')
const { OAuth2Client } = require('google-auth-library');
const Helper = require('../helper/helper')

class UserController {
    static register(req, res, next){
        User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        .then(data=> {
            let payload = {id : data.id, email: data.email}
            let token = Helper.generateToken(payload)
            res.status(201).json({token})
        })
        .catch(err=> next(err))
    }
    static login(req, res, next){
        User.findOne({
            where : {email: req.body.email}
        })
        .then(data=> {
            if (Helper.comparePassword(req.body.password, data.password)){
                let payload = {id : data.id, email: data.email}
                let token = Helper.generateToken(payload)
                res.status(200).json({token})
            } else {
                throw ({message : 'Email / Password are Wrong'})
            }
        })
        .catch(err => next(err))
    }
    static addProject(req, res, next){
        Project.create({
            name : req.body.name,
        })
        .then(data=> {
            return UserProject.create({
                UserId : req.UserId,
                ProjectId : data.id
            })
        })
        .then(data=> res.status(201).json({data}))
        .catch(err=> next(err))
    }
    static joinProject(req, res, next){
        UserProject.create({
            UserId : req.body.userId,
            ProjectId : req.body.ProjectId
        })
        .then(data=> res.status(200).json(data))
        .catch(err=> next(err))
    }
    static findProject(req, res, next){
        Project.findAll({
            order : [['id', 'ASC']],
            include : [{
                model: User,
                where: { id: req.UserId }
            }]
        })
        .then(data=> res.status(200).json({data}))
        .catch(err=> next(err))
    }
    static member(req, res, next){
        User.findAll({
            where : {id : {[Op.not] : req.UserId}},
            order : [['id', 'ASC']]
        })
        .then(data=> res.status(200).json(data))
        .catch(err=> next(err))
    }
    static joinedMember(req, res, next){
        UserProject.findAll({
            where : {ProjectId : req.params.ProjectId},
            order : [['id', 'ASC']],
            include : [User]
        })
        .then(data=> res.status(200).json(data))
        .catch(err=> next(err))
    }
    static remove(req, res, next){
        UserProject.destroy({
            where : {UserId : req.body.UserId, ProjectId : req.body.ProjectId}
        })
        .then(data=> res.status(200).json(data))
        .catch(data=> next(err))
    }
    static signIn(req, res, next){
        let payload
        const client = new OAuth2Client(process.env.CLIENT_ID)
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.idtoken,
              audience: process.env.CLIENT_ID
          });
          payload = ticket.getPayload();
          let email = payload.email
          User.findOne({
              where:{
                  email
              }
          })
          .then(user => {
            if(!user){
              const newUser = {
                name : payload.name,
                email: payload.email,
                password: process.env.SECRET_PASSWORD
              }
              return User.create(newUser)
            }else{
              return user
            }
          })
          .then(data=> {
            let payload = {id : data.id, email: data.email}
            const token = Helper.generateToken(payload)
            res.status(200).json({token})
          })
          .catch(err => {
            next(err);
          })
        }
      verify().catch(err => next(err))
    }
}

module.exports = UserController