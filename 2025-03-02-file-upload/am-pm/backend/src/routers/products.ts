import { Router } from "express";
import { create, getAllProductsByCategory, remove } from "../controllers/products/controller";
import paramsValidation from "../middlewares/params-validation";
import { deleteProductValidator, getPerCategoryValidator, newProductValidator } from "../controllers/products/validator";
import validation from "../middlewares/validation";

const productsRouter = Router();

productsRouter.get('/:categoryId', paramsValidation(getPerCategoryValidator), getAllProductsByCategory)
productsRouter.post('/', validation(newProductValidator), create)
productsRouter.delete('/:id', paramsValidation(deleteProductValidator), remove)

export default productsRouter;