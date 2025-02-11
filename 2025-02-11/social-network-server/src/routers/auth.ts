import { Router } from "express";
import { login, signUp } from "../controllers/auth/controller";
import validation from "../middlewares/validation";
import { loginValidator, signUpValidator } from "../controllers/auth/validator";

const authRouter = Router();

authRouter.post('/login', validation(loginValidator), login)
authRouter.post('/signup', validation(signUpValidator), signUp)

export default authRouter;