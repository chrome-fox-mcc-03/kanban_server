const { Group, GroupUser } = require('../models')

module.exports = {
  createGroup(req, res, next) {
    const { group_name } = req.body
    const { id } = req.decoded
    
    return 
  },
  findAllGroup(req, res, next) {

  },
  inviteUser(req, res, next) {

  }
}