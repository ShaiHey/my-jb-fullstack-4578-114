import mongoose from "mongoose";
import { Target } from "./target";

export interface Game {
    id: string;
    targetId: string;
    target: Target;
    name: string;
    description: string;
    price: number;
}

const GameSchema = new mongoose.Schema<Game>({
    name: String,
    targetId: String,
    target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Target'
    },
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