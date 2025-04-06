import mongoose from "mongoose";

export interface User {
    id: string;
    name: string;
    email: string;
    dropbox: {
        id: string,
        accessToken: string
    },
    createdAt: Date;
}

const UserSchema = new mongoose.Schema<User>({
    name: String,
    email: String,
    dropbox: {
        id: String,
        accessToken: String
    },
    createdAt: Date
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const UserModel = mongoose.model<User>('User', UserSchema, 'users');