import { Router } from "express";
import validation from "../middlewares/validation";
import { deleteCommentParamsValidator, newCommentParamsValidator, newCommentValidator } from "../controllers/comments/validator";
import { createComment, deleteComment } from "../controllers/comments/controller";
import paramsValidation from "../middlewares/params-validation";

const commentsRouter = Router();

commentsRouter.post('/:id', paramsValidation(newCommentParamsValidator), validation(newCommentValidator), createComment)
commentsRouter.delete('/:postId/:commentId', paramsValidation(deleteCommentParamsValidator), deleteComment)

export default commentsRouter;