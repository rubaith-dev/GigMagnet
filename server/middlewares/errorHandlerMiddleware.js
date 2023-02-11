const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  res.status(err.statusCode).json({
    message: err.message,
    success: false,
    status_code:err.statusCode
  });

};

module.exports = errorHandlerMiddleware 
