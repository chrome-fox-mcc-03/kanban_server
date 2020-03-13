const { User } = require('../models')
const { decode } = require('../helper/jwt')

module.exports = (req, res, next) => {
  console.log(req.headers.token)
  const accses_token = decode(req.headers.token)
  console.log(accses_token)
  req.currentId = accses_token.payload.id
  try {
    User.findOne({
      where : {
        email : accses_token.payload.email
      }
    })
      .then(data => {
        if(data) {
          next()
        }else{
          throw {
            name : "costume",
            status : 400,
            message : "Bad request"
          }
        }
      })
  } catch (error) {
    next(error)
  }
}