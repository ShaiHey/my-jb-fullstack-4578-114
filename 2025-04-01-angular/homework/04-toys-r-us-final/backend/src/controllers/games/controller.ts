import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/app-error";
import status from "http-status";
import { GameModel } from "../../models/game";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const games = await GameModel.find().populate(['target'])

        res.json(games.map(doc => doc.toObject()))
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    targetId: string;
    name: string;
    description: string;
    price: number;
}>, res: Response, next: NextFunction) {
    try {
        const newGame = new GameModel({...req.body, target: req.body.targetId})
        await (await newGame.save()).populate(['target'])

        res.json(newGame.toObject())
    } catch (error) {
        next(error)
    }
}

export async function deleteGame(req: Request<{gameId: string}>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.gameId
        const deleteResponse = await GameModel.deleteOne({ _id })

        if(deleteResponse.deletedCount === 0) return next(new AppError(
            status.NOT_FOUND,
            "The game you were trying to delete does not exist"
        ))

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}