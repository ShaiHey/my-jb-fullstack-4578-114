import Joi from "joi";

export const newGiftValidator = Joi.object({
    targetAudienceId: Joi.string().uuid().required(),
    name: Joi.string().max(40).required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().required()
})

export const getGiftValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const deleteGiftValidator = getGiftValidator;