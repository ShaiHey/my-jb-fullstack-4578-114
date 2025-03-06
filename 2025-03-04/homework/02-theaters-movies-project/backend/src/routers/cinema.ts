import { Router } from "express";
import { getAllCinemas } from "../controllers/cinema/controller";

const cinemaRouter = Router()

cinemaRouter.get('/', getAllCinemas)

export default cinemaRouter;