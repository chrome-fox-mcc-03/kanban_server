const { User } = require('../models')
const { compare } = require('../helper/bcrypt')
const { sign } = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

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
  static loginGoogle(req, res, next) {
    let data = ''
    client.verifyIdToken(
      {
        idToken: req.headers.token,
        audience: process.env.CLIENT_ID
      }
    )
      .then(result => {
        data = result.payload
        console.log(data)
        return User.findOne({
          where: {
            email: data.email
          }
        })
      })
      .then(result => {
        if(result) {
          console.log(data.id)
          let payload = 
          {
            id: result.id,
            email: result.email,
          }
          let token = sign(payload)
          res.status(200).json({token})
        }else{
          console.log(data.email)
          return User.create({
              username: data.email,
              email: data.email,
              password: process.env.PASSWORD_GOOGLE
          })
        }
      })
      .then(hasil => {
        let payload = 
        {
          id: hasil.id,
          email: hasil.email,
        }
        let token = sign(payload)
        res.status(200).json({token})
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = ControllerUser