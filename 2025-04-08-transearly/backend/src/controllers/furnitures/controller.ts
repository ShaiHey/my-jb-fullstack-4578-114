import { NextFunction, Request, Response } from "express";
import { FurnitureModel } from "../../models/furniture";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const furnitures = await FurnitureModel.find();

        res.json(furnitures.map(doc => doc.toObject()))
    } catch (error) {
        next(error)
    }
}

export async function createFurniture(req: Request<{}, {}, {
    type: string;
    size: string;
    color: string;
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newFurniture = new FurnitureModel(req.body)
        await newFurniture.save()

        res.json(newFurniture.toObject())
    } catch (error) {
        next(error)
    }
}