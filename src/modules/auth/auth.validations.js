const { Joi } = require('express-validation');

/**
 * Login route validation
 */
const loginValidation = {
  body: Joi.object({
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required(),
  }),
};

/**
 * Signup route validation
 * Change Input Validations according to role
 * See Joi.when
 */
const signupValidation = {
  body: Joi.object({
    name: Joi.object({
      firstName: Joi.string().required(),
      middleName: Joi.string(),
      lastName: Joi.string().required(),
    }).required(),
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required(),
  }),
};

/**
 * Export all
 */
module.exports = {
  loginValidation,
  signupValidation,
};
