import { User } from "../user/user.model";

export interface PostComment {
    body: string;
    postId: string;
    createdAt: string;
    user: User;
}