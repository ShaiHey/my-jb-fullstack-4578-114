import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/app-error";
import status from "http-status";
import { ProductModel } from "../../models/product";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const products = await ProductModel.find()

        res.json(products.map(doc => doc.toObject()))
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    name: string;
    prodDate: Date;
    expireDate: Date;
    category: string;
    price: number;
}>, res: Response, next: NextFunction) {
    try {
        const newProduct = new ProductModel(req.body)
        await newProduct.save()

        res.json(newProduct.toObject())
    } catch (error) {
        next(error)
    }
}

export async function deleteProduct(req: Request<{productId: string}>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.productId
        const deleteResponse = await ProductModel.deleteOne({ _id })

        if(deleteResponse.deletedCount === 0) return next(new AppError(
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