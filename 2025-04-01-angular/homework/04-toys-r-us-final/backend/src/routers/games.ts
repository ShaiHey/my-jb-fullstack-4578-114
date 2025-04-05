import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import validation from "../middlewares/validation";
import { create, deleteGame, getAll } from "../controllers/games/controller";
import { deleteGameParamsValidator, newGameValidator } from "../controllers/games/validator";

const gamesRouter = Router()

gamesRouter.get('/', getAll)
gamesRouter.post('/', validation(newGameValidator), create)
gamesRouter.delete('/:gameId', paramsValidation(deleteGameParamsValidator), deleteGame)

export default gamesRouter;