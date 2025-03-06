import { NextFunction, Request, Response } from "express";
import Cinema from "../../models/cinema";
import Movie from "../../models/movie";

export async function getAllCinemas(req: Request, res: Response, next: NextFunction) {
    try {
        const cinemas = await Cinema.findAll({
            include: [ Movie ]
        })

        res.json(cinemas);
    } catch (error) {
        next(error)
    }
}