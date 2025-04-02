import { Router } from "express";
import { create, deleteBook, getAll } from "../controllers/books/controller";
import validation from "../middlewares/validation";
import { deleteBookParamsValidator, newBookValidator } from "../controllers/books/validator";
import paramsValidation from "../middlewares/params-validation";

const booksRouter = Router()

booksRouter.get('/', getAll)
booksRouter.post('/', validation(newBookValidator), create)
booksRouter.delete('/:bookId', paramsValidation(deleteBookParamsValidator), deleteBook)

export default booksRouter;