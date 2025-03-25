import mongoose from "mongoose";

interface User {
    id: string;
    name: string;
    username: string;
    password: string;
    createdAt: Date;
    picUrl: string;
    following: string[];
}

const UserSchema = new mongoose.Schema<User>({
    name: String,
    username: String,
    password: String,
    createdAt: Date,
    picUrl: String,
    following: [String]
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