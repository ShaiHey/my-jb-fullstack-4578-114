import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().alphanum().min(6).max(40).required(),
    password: Joi.string().min(6).max(40).required()
})

export const signUpValidator = loginValidator.append({
    name: Joi.string().min(3).max(40).required()
})

export const signUpFilesValidator = Joi.object({
    imagePic: Joi.object({
        mimetype: Joi.string().valid('image/png', 'image/jpg', 'image/jpeg')
    }).unknown(true).optional()
})