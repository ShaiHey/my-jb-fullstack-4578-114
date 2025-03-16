import Joi from "joi";

export const newBookValidator = Joi.object({
    bookName: Joi.string().required(),
    summary: Joi.string().required(),
    genreId: Joi.string().uuid().required(),
    bookPrice: Joi.number().min(1).required(),
    stock: Joi.number().required()
});

export const deleteBookValidator = Joi.object({
    bookId: Joi.string().uuid().required()
});