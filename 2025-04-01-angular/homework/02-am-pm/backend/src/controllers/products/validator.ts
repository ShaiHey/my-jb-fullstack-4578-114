import Joi from "joi";

export const newProductValidator = Joi.object({
    name: Joi.string().min(3).required(),
    prodDate: Joi.date().required(),
    expireDate: Joi.date().required(),
    category: Joi.string().min(3).required(),
    price: Joi.number().min(0).required()
})

export const deleteProductParamsValidator = Joi.object({
    productId: Joi.string().hex().length(24).required()
})