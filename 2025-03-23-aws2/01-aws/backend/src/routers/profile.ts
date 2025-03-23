import { Router } from "express";
import { getProfile, getPost, deletePost, createPost, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { newPostFilesValidator, newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import filesValidation from "../middlewares/files-validation";
import fileUploader from "../middlewares/file-uploader";

const profileRouter = Router();

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', validation(newPostValidator), filesValidation(newPostFilesValidator), fileUploader('postImage'), createPost)
profileRouter.patch('/:id', validation(updatePostValidator), updatePost)

export default profileRouter;