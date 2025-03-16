import Joi from "joi";

export const getMoviePerCinemaValidator = Joi.object({
    cinemaId: Joi.string().uuid().required()
})

export const newMovieValidator = Joi.object({
    cinemaId: Joi.string().uuid().required(),
    movieName: Joi.string().required(),
    dateTimeScreening: Joi.date().required(),
    movieDuration: Joi.number().min(60).required(),
})

export const deleteMovieValidator = Joi.object({
    id: Joi.string().uuid().required()
})