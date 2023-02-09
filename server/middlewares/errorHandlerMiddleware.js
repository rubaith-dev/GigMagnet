const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message)
  res.status(err.statusCode).json({
    msg: err.message,
    success: false,
  });
};

module.exports = errorHandlerMiddleware 
