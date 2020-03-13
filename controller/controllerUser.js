const { User } = require('../models')
const { compare } = require('../helper/bcrypt')
const { sign } = require('../helper/jwt')

class ControllerUser {
  static register (req, res, next) {
    const { email, password} = req.body
    User.create({
      email,
      password
    })
      .then(data => {
        res.status(201).json({data})
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
  static login (req, res, next) {
    const { email ,password } = req.body 
    User.findOne({
      where : {
        email
      }
    })
      .then(data => {
        if(data) {
          const validate = compare(password, data.password)
          if(validate) {
            const payload = {
              id : data.id,
              email
            }
            const token = sign(payload)
            res.status(200).json({token})
          }else{
            throw {
              name : 'costume',
              status : 400,
              message : "Email / password wrong"
            }
          }
        }else{
          throw {
            name : 'costume',
            status : 400,
            message : "Email / password wrong"
          }
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = ControllerUser