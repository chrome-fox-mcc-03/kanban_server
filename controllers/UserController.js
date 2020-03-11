const { User } = require("../models");

class UserController {
  static register(req, res, next) {
    let { email, password, username } = req.body;
    User.create({
      email,
      password,
      username
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
      .catch(err => {
        res.status(400).json(err);
      });
  }
}

module.exports = UserController;
