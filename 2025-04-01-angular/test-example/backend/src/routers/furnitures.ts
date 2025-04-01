import { Router } from "express";
import { createFurniture, getAll } from "../controllers/furnitures/controller";
import validation from "../middlewares/validation";
import { newFurnitureValidator } from "../controllers/furnitures/validator";

const furnituresRouter = Router()

furnituresRouter.get('/', getAll)
furnituresRouter.post('/', validation(newFurnitureValidator), createFurniture)

export default furnituresRouter;