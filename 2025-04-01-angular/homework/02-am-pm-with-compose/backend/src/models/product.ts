import mongoose from "mongoose";

export interface Product {
    id: string;
    name: string;
    prodDate: Date;
    expireDate: Date;
    category: string;
    price: number;
}

const ProductSchema = new mongoose.Schema<Product>({
    name: String,
    prodDate: Date,
    expireDate: Date,
    category: String,
    price: Number
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const ProductModel = mongoose.model<Product>('Product', ProductSchema, 'products');