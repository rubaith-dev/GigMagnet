const signupSchema  = require("./auth");

const validator = (schema) => {
  return (payload) => {
    return schema.validate(payload, { abortEarly: false });
  };
};

const validateSignup = validator(signupSchema);

module.exports = {
  validateSignup
};
