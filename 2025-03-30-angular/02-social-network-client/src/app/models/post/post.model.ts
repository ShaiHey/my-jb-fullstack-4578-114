import { PostComment } from "../comment/comment.model";
import { User } from "../user/user.model";

export interface Post {
    id: string;
    title: string;
    body: string;
    user: User;
    createdAt: Date;
    imageUrl: string;
    comments: PostComment[]
}