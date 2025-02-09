import { Router } from "express";
import { getProfile, getPost, deletePost, createPost } from "../controllers/profile/controller";

const profileRouter = Router();

profileRouter.get('/', getProfile)
profileRouter.get('/:id', getPost)
profileRouter.delete('/:id', deletePost)
profileRouter.post('/', createPost)

export default profileRouter;