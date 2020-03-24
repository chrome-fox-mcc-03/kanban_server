module.exports = {
  errorHandler(err, req, res, next) {
    if (err.name === "SequelizeUniqueConstraintError") {
      let uniqueMessage = err.errors.map(el => el.message);
      res.status(400).json({
        status: 400,
        msg: uniqueMessage
      });
    } else if (err.name === "SequelizeValidationError") {
      let validationMessage = err.errors.map(el => el.message);
      res.status(400).json({
        status: 400,
        msg: validationMessage
      });
    } else {
      res.status(err.status || 500).json({
        status: err.status || 500,
        msg: err.msg || "Internal Server Error"
      });
    }
  }
};
