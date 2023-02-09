const Joi = require("joi")

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(10),
});



module.exports = signupSchema
