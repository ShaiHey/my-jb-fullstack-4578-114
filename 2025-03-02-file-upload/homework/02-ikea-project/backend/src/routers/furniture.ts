import { Router } from "express";
import { create, getAllFurniture } from "../controllers/furniture/controller";
import validation from "../middlewares/validation";
import { newFurnitureValidator } from "../controllers/furniture/validator";

const furnitureRouter = Router();

furnitureRouter.get('/', getAllFurniture)
furnitureRouter.post('/', validation(newFurnitureValidator), create)

export default furnitureRouter;