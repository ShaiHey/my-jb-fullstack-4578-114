import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import { deleteMovieValidator, getMoviePerCinemaValidator, newMovieValidator } from "../controllers/movie/validator";
import { createMovie, deleteMovie, getMoviePerCinema } from "../controllers/movie/controller";
import validation from "../middlewares/validation";

const movieRouter = Router()

movieRouter.get('/:cinemaId', paramsValidation(getMoviePerCinemaValidator), getMoviePerCinema)
movieRouter.post('/', validation(newMovieValidator), createMovie)
movieRouter.delete('/:id', paramsValidation(deleteMovieValidator), deleteMovie)

export default movieRouter;