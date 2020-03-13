const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { checkPassword } = require("../helpers/bcrypt");
const { OAuth2Client } = require("google-auth-library");

class UserController {
  static register(req, res, next) {
    let { email, password, username } = req.body;
    User.create({
      email,
      password,
      username,
      url: process.env.DEFAULT_IMAGE_URL
    })
      .then(newData => {
        let payload = {
          id: newData.id,
          email: newData.email,
          username: newData.username
        };
        res.status(201).json({
          status: 201,
          data: payload
        });
      })
      .catch(next);
  }

  static login(req, res, next) {
    let { email, password } = req.body;
    // check for email
    User.findOne({
      where: {
        email
      }
    })
      .then(dataUser => {
        if (dataUser) {
          // email is found
          if (checkPassword(password, dataUser.password)) {
            // password is correct, generate token
            let payload = {
              id: dataUser.id,
              email: dataUser.email,
              username: dataUser.username
            };
            res.status(200).json({
              token: generateToken(payload)
            });
          } else {
            // password is incorrect
            res.status(400).json({
              status: 400,
              msg: "Email / Password was incorrect"
            });
          }
        }
        // email is not found
        res.status(400).json({
          status: 400,
          msg: "Email / Password was incorrect"
        });
      })
      .catch(next);
  }

  // static gsignin(req, res, next) {
  //   let payload = {};
  //   const client = new OAuth2Client(CLIENT_ID);
  //   client
  //     .verifyIdToken({
  //       idToken: req.headers.google_token,
  //       audience: process.env.GOOGLE_CLIENT_ID
  //     })
  //     .then(ticket => {
  //       payload = {
  //         email: ticket.getPayload().email,
  //         username: ticket.getPayload().fullname, // this section need further reviews
  //         password: process.env.DEFAULT_PASSWORD
  //       };
  //       // check if email already exist
  //       return User.findOne({
  //         where: {
  //           email: payload.email
  //         }
  //       });
  //     })
  //     .then(userData => {
  //       if (userData) {
  //         // email is found, continute logging in
  //         return userData;
  //       } else {
  //         // email is not found, creating a new account
  //         return User.create(payload);
  //       }
  //     })
  //     .then(finalData => {
  //       // generating token
  //       res.status(200).json({
  //         token: generateToken({
  //           id: finalData.id,
  //           email: finalData.email,
  //           username: finalData.username
  //         })
  //       });
  //     })
  //     .catch(err => {
  //       next({
  //         status: 500,
  //         msg: "fail connecting with Google OAuth"
  //       });
  //     });
  // }
}

module.exports = UserController;
