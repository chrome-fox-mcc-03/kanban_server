module.exports = (err, req, res, next) => {
  console.log(err, '>>>>>>>>>>>>>>>>>>>>')

  let status = 500
  let errObj = {
    message: 'Internal Server Error'
  }

  res.status(status).json(errObj)
}