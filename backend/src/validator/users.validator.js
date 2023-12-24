const joi = require("joi");
const emailSchema = joi.string().email().required().label("Email");
const passwordSchema = joi
  .string()
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  .required()
  .label("Password");
const loginSchema = joi.object({
  email: emailSchema,
  password: passwordSchema,
});
const registerSchema = joi.object({
  email: emailSchema,
  password: joi.string().required().label("Password"),
  name: joi.string().min(3).max(50).required().label("Name"),
});
module.exports = { loginSchema, registerSchema };
