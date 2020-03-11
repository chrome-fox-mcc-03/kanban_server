const errorHandler = (err, req, res, _) => {
  let status = 500
  let errors = []
  const obj = {
    status,
    errors,
    message: ''
  }
console.error(err);
  switch (err.name) {
    case 'SequelizeValidationError':
      console.log('masuk di validation error ========');
      obj.message = 'Bad Request'
      status = 400;
      obj.status = status;
      for (const er of err.errors) {
        obj.errors.push(er.message)
      }
      res.status(status).json(obj);
    break;
    
    case 'SequelizeUniqueConstraintError':
      obj.message = 'Bad Request'
      status = 400;
      obj.status = status;
      for (const e of err.errors) {
        obj.errors.push(e.message)
      }
      res.status(status).json(obj);
    break;

    case 'JsonWebTokenError':
      obj.message = err.name;
      obj.errors.push(err.message);
      status = 400;
      obj.status = status;
      res.status(status).json(obj);
      break;
    
    default:
      status = err.status || 500;
      obj.status = status;
      obj.message = err.name || 'Internal Server Error'
      obj.errors.push(err.message);
      res.status(status).json(obj);
      break;
  }
}

module.exports = errorHandler;