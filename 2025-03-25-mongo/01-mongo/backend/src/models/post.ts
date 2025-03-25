import mongoose from "../db/mongoose";
import { User } from "./user";

interface PostComment {
    body: string;
    userId: string;
    user: User,
    createdAt: Date;
}

interface Post {
    id: string;
    title: string;
    body: string;
    userId: string;
    imageUrl: string;
    user: User,
    createdAt: Date;
    comments: PostComment[];
}

const CommentSchema = new mongoose.Schema<PostComment>({
    body: String,
    userId: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: Date
})


const PostSchema = new mongoose.Schema<Post>({
    title: String,
    body: String,
    userId: String,
    imageUrl: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: Date,
    comments: [CommentSchema]
}, {
    toObject: {
        transform(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    }
})

export const PostModel = mongoose.model<Post>('Post', PostSchema, 'posts')