import { NextFunction, Request, Response } from "express"
import { TargetModel } from "../../models/target"

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const targets = await TargetModel.find()

        res.json(targets.map(doc => doc.toObject()))
    } catch (error) {
        next(error)
    }
}