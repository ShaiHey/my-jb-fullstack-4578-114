import mongoose from "mongoose";

export interface Target {
    id: string;
    target: string;
}

const TargetSchema = new mongoose.Schema<Target>({
    target: String
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const TargetModel = mongoose.model<Target>('Target', TargetSchema, 'targets');