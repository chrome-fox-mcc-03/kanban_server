const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

module.exports = 
  class UserController {
    static login (req, res, next) {
      const { email, password } = req.body
      User.findOne({
        where: { email }
      })
        .then(user => {
          if (!user) next({
            status: 401,
            message: 'Wrong email / password'
          })
          else {
            if (!compare(password, user.password)) next({
              status: 401,
              message: 'Wrong email / password'
            })
            else {
              const token = createToken(user.id)
              res.status(200).json({ token, username: user.username })
            }
          }
        })
        .catch(next)
    }

    static register (req, res, next) {
      const { username, email, password } = req.body
      console.log(username, email)
      User.create({ username, email, password })
        .then(() => res.status(201).json({ message: 'Register successful' }))
        .catch(next)
    }    

    static google (req, res, next) {
      const CLIENT_ID = process.env.CLIENT_ID
        let userObj = {
          password: process.env.DEFAULT_PWD
        }
        
        let id_token = req.headers.id_token
        const client = new OAuth2Client(CLIENT_ID);
        client.verifyIdToken({
          idToken: id_token,
          audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
          .then(ticket => {
            const payload = ticket.getPayload();
            userObj.username = payload.name
            userObj.email = payload.email
            //sequelize function to search or create when data not found
            return User.findOrCreate({
              where: {
                email: userObj.email,
              },
              defaults: {
                username: userObj.username,
                email: userObj.email,
                password: userObj.password
              }
            })
          })
          .then(response => {
            let user = response[0]
            let token = createToken(user.id) 
            res.status(201).json(
              {
                username: user.username,
                token 
              })
          })
          .catch(next)
    }
  }