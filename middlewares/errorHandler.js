module.exports = {
  errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
      status: err.status || 500,
      msg: err.msg || "Internal Server Error"
    });
  }
};
