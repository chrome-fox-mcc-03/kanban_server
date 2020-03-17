const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateToken: (payload) => {
    return sign({
      data: payload
    }, process.env.SECRET_KEY, { expiresIn: '5h' });
  },

  verifyToken: (token) => {
    return verify(token, process.env.SECRET_KEY);
  }
}