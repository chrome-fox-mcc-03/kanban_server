const { User } = require('../models');
const { bcrypt, jwtoken } = require('../helpers'); 
const { OAuth2Client } = require('google-auth-library');

class Controller { 
  static async register (req, res, next) {
    try {
      const { email, password } = req.body;
  
      const newUser= await User.create({
        email,
        password,
      });
  
      const payload = {
        id: newUser.id,
        email: newUser.email,
      };
  
      res.status(201).json(payload);
    } catch(err) {
      next(err);
    }
  }

  static async login (req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (user) {
        const checkPassword = bcrypt.checkPassword(password, user.password);
        if (checkPassword) {
          const payload = {
            id: user.id,
            email: user.email,
          };
          
          const token = jwtoken.generateToken(payload);
          res.status(200).json({
            token,
          });
        } else {
          const error = {
            name: 'LoginFailed',
            status: 401,
            message: 'Password or email is wrong',
          }
          next(error);
        }
      } else {
        const error = {
          name: 'LoginFailed',
          status: 401,
          message: 'Password or email is wrong',
        }
        next(error);
      }
    } catch(err) {
      next(err);
    }
  }

  static async googleSignIn(req, res, next) {
    const token = req.headers.token;
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const email = payload['email'];
      
      const user = await User.findOne({ where: { email } });

      const gLogin = (gUser) => {
        const payload = {
          id: gUser.id,
          email: gUser.email,
        };
        const token = jwtoken.generateToken(payload);
        res.status(201).json(token);
      };

      if (user) {
        gLogin(user);
      } else {
        const newUser = await User.create({
          email,
          password: process.env.DEFAULT_PASSWORD,
        });
        gLogin(newUser);  
      }
      
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;