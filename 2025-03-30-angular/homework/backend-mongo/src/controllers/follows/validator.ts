import Joi from "joi";

export const newFollowValidator = Joi.object({
    id: Joi.string().hex().length(24).required()
})

export const newUnFollowValidator = newFollowValidator;