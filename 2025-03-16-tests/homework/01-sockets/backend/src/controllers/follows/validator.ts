import Joi from "joi";

export const newFollowValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const newUnFollowValidator = newFollowValidator;