import { NextFunction, Request, Response } from "express";
import Furniture from "../../models/furniture";
import FurnitureType from "../../models/furniture-type";

export async function getAllFurniture(req: Request, res: Response, next: NextFunction) {
    try {
        const furniture = await Furniture.findAll({
            include: [FurnitureType]
        })

        res.json(furniture)
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    furnitureTypeId: string,
    dimensions: string,
    color: string,
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newFurniture = await Furniture.create(req.body)

        await newFurniture.reload({
            include: [FurnitureType]
        })

        res.json(newFurniture)
    } catch (error) {
        next(error)
    }
}