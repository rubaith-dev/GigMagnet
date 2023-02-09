const jwt = require("jsonwebtoken");

const generateJwt = (email, userId) => {
  return jwt.sign({ email, userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_AGE,
  });
};

module.exports =  generateJwt;
