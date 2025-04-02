import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import { create, deleteProduct, getAll } from "../controllers/products/controller";
import { deleteProductParamsValidator, newProductValidator } from "../controllers/products/validator";
import validation from "../middlewares/validation";

const productsRouter = Router()

productsRouter.get('/', getAll)
productsRouter.post('/', validation(newProductValidator), create)
productsRouter.delete('/:productId', paramsValidation(deleteProductParamsValidator), deleteProduct)

export default productsRouter;