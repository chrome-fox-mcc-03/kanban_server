const { Kanban } = require('../models')

class ControllerKanban {
  static findAlluserKanban (req, res, next) {
    Kanban.findAll({
      where: {
        UserId: req.currentId
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static findAllteamKanban (req, res, next) {
    Kanban.findAll({
      where: {
        TeamId: req.currentTeam
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static findOne (req, res, next ) {
    const { id } = req.params
    Kanban.findOne({
      where :{
        id
      }
    })
      .then(data => {
        if(data) {
          res.status(200).json(data)
        }else{
          throw {
            name : 'cotume',
            status : 400,
            message: "Data is not deifiend"
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }
  static addKanban (req, res, next) {
    const  { title, description } =req.body
    Kanban.create ({
      title,
      description,
      StatusId : 1,
      UserId: req.currentId
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static delete (req, res, next) {
    const { id } =req.params
    Kanban.destroy({
      where : {
        id
      }
    })
      .then(data => {
        res.status(200).json({
          message : "Delete succses"
        })
      })
      .catch(err => {
        next(err)
      })
  }
  static updated (req, res, next) {
    const { id } = req.params
    const { title, description, StatusId } = req.body
    Kanban.findOne({
      where: {
        id
      }
    })
      .then(data => {
        console.log(data,"AJSJBDLASBLDBASLKDBAJSBDJASBL")
        if(data){
          return Kanban.update({
            title,
            description,
            StatusId
          },
          {
            where : {
              id
            }
          })
        }else{
          throw {
            name : 'costume',
            status : 400,
            message : "Data is undefined"
          }
        }
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static updateStatus (req, res, next) {
    const { id } =req.params
    const { title, description, StatusId } = req.body
    console.log(StatusId,"OWKDOWAKDOWKDOWK")
    Kanban.findOne({
      where : {
        id
      }
    })
      .then(data => {
        if(data) {
          return Kanban.update({
            StatusId
          },
          {
            where: {
              id
            }
          })
        }else{
          throw {
            name : 'costume',
            status : 400,
            message : 'data is not defined'
          }
        }
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err)
      })
      
  }
}

module.exports = ControllerKanban