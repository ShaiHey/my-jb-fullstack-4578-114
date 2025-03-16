import { NextFunction, Request, Response } from "express";
import Genre from "../../models/genre";
import Book from "../../models/book";

export async function getAllGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const genres = await Genre.findAll({
            include: [ Book ]
        })

        res.json(genres)
    } catch (error) {
        next(error)
    }
}