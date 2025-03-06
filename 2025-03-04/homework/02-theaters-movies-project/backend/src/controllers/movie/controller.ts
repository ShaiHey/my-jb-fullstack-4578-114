import { NextFunction, Request, Response } from "express";
import Movie from "../../models/movie";
import Cinema from "../../models/cinema";

export async function getMoviePerCinema(req: Request<{cinemaId: string}>, res: Response, next: NextFunction) {
    try {
        const { cinemaId } = req.params
        const movies = await Movie.findAll({
            where: { cinemaId },
            include: [ Cinema ]
        })

        res.json(movies)
    } catch (error) {
        next(error)
    }
}

export async function createMovie(req: Request<{}, {}, {
    cinemaId: string,
    movieName: string,
    dateTimeScreening: Date,
    movieDuration: number,
}>, res: Response, next: NextFunction) {
    try {
        const newMovie = await Movie.create(req.body)

        await newMovie.reload({
            include: [ Cinema ]
        })

        res.json(newMovie)
    } catch (error) {
        next(error)
    }
}

export async function deleteMovie(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params

        await Movie.destroy({
            where: { id }
        })

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}