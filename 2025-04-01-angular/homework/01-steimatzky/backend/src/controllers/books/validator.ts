import Joi from "joi";

export const newBookValidator = Joi.object({
    name: Joi.string().min(5).required(),
    summary: Joi.string().min(10).required(),
    gerne: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().min(0).required()
})

export const deleteBookParamsValidator = Joi.object({
    bookId: Joi.string().hex().length(24).required()
})