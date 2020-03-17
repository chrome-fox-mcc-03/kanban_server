const { hashSync, genSaltSync, compareSync } = require('bcryptjs');

module.exports = {
  hashPassword: (password) => {
    const salt = genSaltSync(+process.env.SALT);
    return hashSync(password, salt);
  },

  checkPassword: (password, hashedPassword) => {
    return compareSync(password, hashedPassword);
  }
}