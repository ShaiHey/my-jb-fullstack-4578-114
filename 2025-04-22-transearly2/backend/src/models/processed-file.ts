import mongoose from "mongoose";

export interface ProcessedFile {
    userId: string;
    path: string;
    processedAt: Date;
}

const processedFilesSchema = new mongoose.Schema<ProcessedFile>({
    userId: String,
    path: String,
    processedAt: { type: Date, default: Date.now }
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const processedFilesModel = mongoose.model<ProcessedFile>('ProcessedFile', processedFilesSchema, 'processedFiles');