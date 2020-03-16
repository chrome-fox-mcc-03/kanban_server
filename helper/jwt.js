const jwt = require('jsonwebtoken')

function getToken(payload) {
  console.log('masuk');
  
  let token = jwt.sign(payload, process.env.SECRET)
  return token
}

function verifyToken(token) {
  let decoded = jwt.verify(token, process.env.SECRET)
  return decoded
}

module.exports = {
  getToken,
  verifyToken
}