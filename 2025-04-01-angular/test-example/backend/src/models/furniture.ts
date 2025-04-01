import mongoose from "mongoose";

export interface Furniture {
    id: string;
    type: string;
    size: string;
    color: string;
    price: number;
}

const FurnitureSchema = new mongoose.Schema<Furniture>({
    type: String,
    size: String,
    color: String,
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

export const FurnitureModel = mongoose.model<Furniture>('Furniture', FurnitureSchema, 'furnitures');