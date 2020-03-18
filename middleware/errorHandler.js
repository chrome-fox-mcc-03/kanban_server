module.exports = (err, req, res, next) => {
  console.log(err)
  const obj = {
    status : 500,
    message : "Internal Servel Error" 
  }
  if(err.name == 'costume') {
    obj.status = err.status
    obj.message = err.message
    res.status(obj.status).json(obj.message)
  }else if (err.name === 'SequelizeValidationError') {
    let arr = []
    err.errors.forEach(el => {
      arr.push(el.message)
    })
    obj.message = arr
    obj.status = 401
    res.status(obj.status).json(obj.message)
  }
}