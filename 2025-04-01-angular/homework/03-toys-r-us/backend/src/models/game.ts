import mongoose from "mongoose";

export interface Game {
    id: string;
    target: string;
    name: string;
    description: string;
    price: number;
}

const GameSchema = new mongoose.Schema<Game>({
    target: String,
    name: String,
    description: String,
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

export const GameModel = mongoose.model<Game>('Game', GameSchema, 'games');