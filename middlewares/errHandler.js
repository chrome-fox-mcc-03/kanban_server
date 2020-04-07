module.exports = 
  function errHandler(err, req, res, _) {
    let status = 500
    // let errors = []
    console.log(err)

    res.status(err.status || status).json({ message: err.message } || { err })
  }