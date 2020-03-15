const { Group, GroupUser, User } = require('../models')

module.exports = {
  createGroup(req, res, next) {
    const { group_name } = req.body
    const { id } = req.decoded

    Group.create({
      group_name
    })
      .then(data => {
        return GroupUser.create({
          UserId: id,
          GroupId: data.id
        })
      })
      .then(_ => {
        res.status(201).json({
          message: 'Success create Group'
        })
      })
      .catch(next)
  },
  findAllGroup(req, res, next) {
    const { id } = req.decoded

    GroupUser.findAll({
      where: { UserId: id },
      include: [Group, User]
    })
      .then(data => {
        res.status(200).json({
          data
        })
      })
      .catch(next)
  },
  inviteUser(req, res, next) {
    const { email } = req.body
    const { id } = req.params
    let username = ''

    User.findOne({
      where: { email }
    })
      .then(data => {
        if (data) {
          username = data.username
          return GroupUser.create({
            UserId: data.id,
            GroupId: id
          })
        } else {
          throw {
            status: 404,
            message: 'User Not Found'
          }
        }
      })
      .then(_ => {
        res.status(201).json({
          message: `Success invite ${username}`
        })
      })
      .catch(next)
  },
  deleteGroup(req, res, next) {
    const { id } = req.params

    Group.destroy({
      where: { id }
    })
      .then(_ => {
        res.status(200).json({
          message: 'Success delete group'
        })
      })
      .catch(next)
  }
}