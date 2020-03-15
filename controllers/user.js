const { User } = require('../models')
const { checkPassword, createToken } = require('../helpers')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
  register(req, res, next) {
    const { username, email, password } = req.body
    
    User.create({
      username, email, password
    })
      .then(_ => {
        res.status(201).json({
          message: 'Success register'
        })
      })
      .catch(next)
  },
  login(req, res, next) {
    const { email, password } = req.body

    User.findOne({
      where: { email }
    })
      .then(data => {
        if(data){
          const check = checkPassword(password, data.password)
          if(check) {
            const token = createToken({
              id: data.id,
              email
            })
            res.status(200).json({
              token,
              message: `Success login as ${data.username}`
            })
          } else {
            next({
              status: 400,
              message: 'Invalid email / password'
            })
          }
        } else {
          next({
            status: 400,
            message: 'Invalid email / password'
          })
        }
      })
      .catch(next)
  },
  gLogin(req, res, next) {
    let email = ''
    let username = ''

    client.verifyIdToken({
      idToken: req.headers.token,
      audience: process.env.CLIENT_ID
    })
      .then(data => {
        email = data.payload.email
        username = data.payload.name
        
        return User.findOne({ where: { email } })
      })
      .then(data => {
        if (!data) {
          return User.create({
            username,
            email,
            password: process.env.PASSWORD
          })
        } else {
          return data
        }
      })
      .then(data => {
        const token = createToken({
          id: data.id,
          email
        })
        
        res.status(200).json({
          token,
          message: `Success login as ${data.username}`
        })
      })
      .catch(next)
  }
}