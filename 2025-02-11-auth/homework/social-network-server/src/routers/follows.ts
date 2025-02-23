import { Router } from "express";
import { follow, getFollowers, getFollowing, unfollow } from "../controllers/follows/controller";
import paramsValidation from "../middlewares/params-validation";
import { newFollowValidator, newUnFollowValidator } from "../controllers/follows/validator";

const followsRouter = Router();

followsRouter.get('/followers', getFollowers)
followsRouter.get('/following', getFollowing)
followsRouter.post('/follow/:id', paramsValidation(newFollowValidator), follow)
followsRouter.post('/unfollow/:id', paramsValidation(newUnFollowValidator), unfollow)

export default followsRouter;