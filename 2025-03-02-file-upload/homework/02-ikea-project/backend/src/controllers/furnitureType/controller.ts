import { NextFunction, Request, Response } from "express";
import Furniture from "../../models/furniture";
import FurnitureType from "../../models/furniture-type";

export async function getAllFurnitureType(req: Request, res: Response, next: NextFunction) {
    try {
        const furnitureType = await FurnitureType.findAll({
            include: [Furniture]
        })

        res.json(furnitureType)
    } catch (error) {
        next(error)
    }
}