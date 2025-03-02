import { NextFunction, Request, Response } from "express";
import TargetAudience from "../../models/target-audience";
import Gift from "../../models/gift";

export async function getTargetAudience(req: Request, res: Response, next: NextFunction) {
    try {
        const targetAudiences = await TargetAudience.findAll({
            include: [Gift]
        });

        res.json(targetAudiences);
    } catch (error) {
        next(error)
    }
}