import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import { deleteGiftValidator, getGiftValidator, newGiftValidator } from "../controllers/gift/validator";
import { createGift, getGiftsByTarget, removeGift } from "../controllers/gift/controller";
import validation from "../middlewares/validation";

const giftsRouter = Router();

giftsRouter.get('/:id', paramsValidation(getGiftValidator), getGiftsByTarget)
giftsRouter.post('/', validation(newGiftValidator), createGift)
giftsRouter.delete('/:id', paramsValidation(deleteGiftValidator), removeGift)

export default giftsRouter;