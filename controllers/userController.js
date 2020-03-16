const { User } = require('../models')
const { getToken } = require('../helper/jwt')
const { comparePassword } = require('../helper/bcrypt')
const { OAuth2Client } = require('google-auth-library');

class UserController {

  static register(req, res, next) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then((user) => {
        let payload = {
          id: user.id,
          name: user.name,
          email: user.email
        }
        let token = getToken(payload)
        res.status(201).json(token)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (user) {
          let status = comparePassword(req.body.password, user.password)
          if (status) {
            let payload = {
              id: user.id,
              name: user.email,
              email: user.email
            }
            let token = getToken(payload)
            res.status(200).json(token)
          }
          else {
            res.status(400).json({ message: "Invalid email or password" })
          }
        }
        else {
          res.status(400).json({ message: "Invalid email or password" })
        }
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }

  static googleSignin(req, res, next) {
// console.log(req.headers);

    let obj = {}
    const Token = req.headers.token
    const client = new OAuth2Client(process.env.CLIENTID);
    client.verifyIdToken({
      idToken: Token,
      audience: process.env.CLIENTID // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    })
      .then((ticket) => {
        // console.log('masuk');

        let payload = ticket.getPayload()
        // console.log(payload)
        obj.name = payload.name
        // console.log(obj.name);
        
        obj.email = payload.email
        return User.findOne({
          where: {
            email: obj.email
          }
        })
      })
      .then((user) => {
        if (!user) {
          return User.create({
            name: obj.name,
            email: obj.email,
            password: process.env.DEFAULTPASSWORD
          })
        }
        else {
          return user
        }
      })
      .then((user) => {
        console.log('masuk disini');
        
        let payload = {
          id: user.id,
          name: user.name,
          email: user.email
        }
        let token = getToken(payload)
        
        console.log(token)
        res.status(200).json(token)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController