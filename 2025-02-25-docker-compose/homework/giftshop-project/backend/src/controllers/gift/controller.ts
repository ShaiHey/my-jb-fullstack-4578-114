import { NextFunction, Request, Response } from "express";
import TargetAudience from "../../models/target-audience";
import Gift from "../../models/gift";
import AppError from "../../errors/app-error";
import status from "http-status";

export async function getGiftsByTarget(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const audience = await TargetAudience.findByPk(req.params.id, {
            include: {
                model: Gift,
                include: [TargetAudience]
            }
        })
        
        res.json(audience.gifts)
    } catch (error) {
        next(error)
    }
}

export async function createGift(req: Request, res: Response, next: NextFunction) {
    try {
        const newGift = await Gift.create({
            ...req.body
        })

        await newGift.reload({
            include: [ TargetAudience ]
        })
        
        res.json(newGift)
    } catch (error) {
        next(error)
    }
}

export async function removeGift(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const id = req.params.id

        const deletedRows = await Gift.destroy({
            where: { id }
        })

        if(deletedRows === 0) return next(new AppError(
            status.NOT_FOUND,
            "The gift you were trying to delete does not exist"
        ))

        res.json({
            success: true
        })
        
    } catch (error) {
        next(error)
    }
}