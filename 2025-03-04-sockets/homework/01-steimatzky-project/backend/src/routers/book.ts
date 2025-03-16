import { Router } from "express";
import { create, deleteBook, getAllBooks } from "../controllers/book/controller";
import validation from "../middlewares/validation";
import { deleteBookValidator, newBookValidator } from "../controllers/book/validator";
import paramsValidation from "../middlewares/params-validation";

const bookRouter = Router()

bookRouter.get('/', getAllBooks)
bookRouter.post('/', validation(newBookValidator), create)
bookRouter.delete('/:bookId', paramsValidation(deleteBookValidator), deleteBook)

export default bookRouter;