const bcrypt = require("bcrypt");

module.exports = {
  hashPassword(inputPassword) {
    return bcrypt.hashSync(inputPassword, Number(process.env.SALT));
  },
  checkPassword(inputPassword, hashedPassword) {
    return bcrypt.compareSync(inputPassword, hashedPassword);
  }
};
