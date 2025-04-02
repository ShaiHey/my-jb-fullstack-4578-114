import mongoose from "mongoose";

export interface Book {
    id: string;
    name: string;
    summary: string;
    gerne: string;
    price: number;
    stock: number;
}

const BookSchema = new mongoose.Schema<Book>({
    name: String,
    summary: String,
    gerne: String,
    price: Number,
    stock: Number
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const BookModel = mongoose.model<Book>('Book', BookSchema, 'books');