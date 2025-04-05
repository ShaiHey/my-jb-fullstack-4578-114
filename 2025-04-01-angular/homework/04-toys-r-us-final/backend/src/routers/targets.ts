import { Router } from "express";
import { getAll } from "../controllers/target/controller";

const targetsRouter = Router();

targetsRouter.get('/', getAll);

export default targetsRouter;