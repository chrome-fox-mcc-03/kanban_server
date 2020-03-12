module.exports = 
  function errHandler(err, req, next, _) {
    let status = 500
    // let errors = []

    res.status(err.status || status).json({ message: err.message } || { err })
  }