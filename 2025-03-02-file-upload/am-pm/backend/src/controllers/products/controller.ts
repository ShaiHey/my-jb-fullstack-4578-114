import { NextFunction, Request, Response } from "express";
import Category from "../../models/category";
import Product from "../../models/product";
import AppError from "../../errors/app-error";
import status from "http-status";

export async function getAllProductsByCategory(req: Request<{categoryId: string}>, res: Response, next: NextFunction) {
    try {
        const { categoryId } = req.params

        const category = await Category.findByPk(categoryId, {
            include: [Product]
        })

        res.json(category.products);
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    name: string,
    productionTime: Date,
    expirationTime: Date,
    categoryId: string,
    price: number
}>, res: Response, next: NextFunction) {
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        next(error)
    }
}

export async function remove(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        const deletedRows = await Product.destroy({
            where: { id }
        })

        if(deletedRows === 0) return next(new AppError(
            status.NOT_FOUND,
            "The product you were trying to delete does not exist"
        ))

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}