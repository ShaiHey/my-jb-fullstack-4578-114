import Joi from "joi";

export const newFurnitureValidator = Joi.object({
    furnitureTypeId: Joi.string().uuid().required(),
    dimensions: Joi.string().required(),
    color: Joi.string().required(),
    price: Joi.number().min(1).required(),
})