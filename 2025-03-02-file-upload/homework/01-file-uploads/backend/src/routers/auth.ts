import { Router } from "express";
import { login, signUp } from "../controllers/auth/controller";
import validation from "../middlewares/validation";
import { loginValidator, signUpFilesValidator, signUpValidator } from "../controllers/auth/validator";
import fileUploader from "../middlewares/file-uploader";
import filesValidation from "../middlewares/files-validation";

const authRouter = Router();

authRouter.post('/login', validation(loginValidator), login)
authRouter.post('/signup', validation(signUpValidator), filesValidation(signUpFilesValidator), fileUploader, signUp)

export default authRouter;