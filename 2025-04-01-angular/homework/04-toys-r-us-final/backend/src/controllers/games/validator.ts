import Joi from "joi";

export const newGameValidator = Joi.object({
    targetId: Joi.string().hex().length(24).required(),
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().min(0).required()
})

export const deleteGameParamsValidator = Joi.object({
    gameId: Joi.string().hex().length(24).required()
})