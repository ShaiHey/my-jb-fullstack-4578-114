import { NextFunction, Request, Response } from "express";
import Book from "../../models/book";
import Genre from "../../models/genre";

export async function getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
        const books = await Book.findAll({
            include: [ Genre ]
        })

        res.json(books)
    } catch (error) {
        next(error)
    }
}

export async function create(req: Request<{}, {}, {
    bookName: string,
    summary: string,
    genreId: string,
    bookPrice: number,
    stock: number
}>, res: Response, next: NextFunction) {
    try {
        const newBook = await Book.create(req.body)

        await newBook.reload({
            include: [ Genre ]
        })

        res.json(newBook)
    } catch (error) {
        next(error)
    }
}

export async function deleteBook(req: Request<{bookId: string}>, res: Response, next: NextFunction) {
    try {
        const { bookId } = req.params

        await Book.destroy({
            where: {
                id: bookId
            }
        })

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}