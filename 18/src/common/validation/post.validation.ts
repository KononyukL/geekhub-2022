import Joi from 'joi';

export const addPostBodySchema = Joi.object({
  topic: Joi.string().min(10).max(64).required(),
  text: Joi.string().min(10).max(1000).required()
});

export const editPostBodySchema = Joi.object({
  topic: Joi.string().min(10).max(64),
  text: Joi.string().min(10).max(1000)
});

export const postParamsSchema = Joi.object({
  id: Joi.string().required()
});

export const userPostParamsSchema = Joi.object({
  userId: Joi.string().required()
});

export const userPostQuerySchema = Joi.object({
  skip: Joi.number().required(),
  take: Joi.number().required()
});
