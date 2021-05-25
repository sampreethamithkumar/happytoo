const Joi = require("joi-browser");

function validateUser(email, password) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate({
    email,
    password,
  });
}

export default validateUser;
