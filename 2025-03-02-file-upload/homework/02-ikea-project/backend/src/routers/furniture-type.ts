import { Router } from "express";
import { getAllFurnitureType } from "../controllers/furnitureType/controller";

const furnitureTypeRouter = Router();

furnitureTypeRouter.get('/', getAllFurnitureType)

export default furnitureTypeRouter;