import { NextFunction, Request, Response } from "express";
import { BookModel } from "../../models/book";
import AppError from "../../errors/app-error";
import status from "http-status";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const books = await BookModel.find()

        res.json(books.map(doc => doc.toObject()))
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    name: string;
    summary: string;
    gerne: string;
    price: number;
    stock: number;
}>, res: Response, next: NextFunction) {
    try {
        const newBook = new BookModel(req.body)
        await newBook.save()

        res.json(newBook.toObject())
    } catch (error) {
        next(error)
    }
}

export async function deleteBook(req: Request<{bookId: string}>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.bookId
        const deleteResponse = await BookModel.deleteOne({ _id })

        if(deleteResponse.deletedCount === 0) return next(new AppError(
            status.NOT_FOUND,
            "The book you were trying to delete does not exist"
        ))

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}