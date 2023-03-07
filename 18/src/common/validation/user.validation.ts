import Joi from 'joi';

const passwordPattern = /(((?=.*[a-z])(?=.*[A-Z]))(?=.*[0-9]))(?=.*[!@#$%^&*])/;

export const registerBodySchema = Joi.object({
  login: Joi.string().min(3).max(255).required(),
  password: Joi.string().min(8).max(255).pattern(passwordPattern).required(),
  email: Joi.string().min(8).max(255).email().required(),
  avatar: Joi.string().min(8).max(255),
  firstName: Joi.string().min(8).max(255),
  lastName: Joi.string().min(8).max(255),
  socials: Joi.object({
    facebook: Joi.string().min(8).max(255),
    instagram: Joi.string().min(8).max(255),
    twitter: Joi.string().min(8).max(255)
  }),
  age: Joi.number().min(18).max(150).required(),
  interests: Joi.array().items(Joi.string()),
  address1: Joi.string().min(10).max(255).required(),
  address2: Joi.string().min(10).max(255),
  postIndex: Joi.string().length(6).regex(/^\d+$/).required()
});

export const loginBodySchema = Joi.object({
  login: Joi.string().min(3).max(255).required(),
  password: Joi.string().min(8).max(255).regex(passwordPattern).required()
});
