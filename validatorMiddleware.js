const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(18).max(120).required(),
  id: Joi.number().required(),
});

const validateCreateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateCreateUser,
};
