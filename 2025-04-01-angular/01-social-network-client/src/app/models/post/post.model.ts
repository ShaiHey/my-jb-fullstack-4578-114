import { PostComment } from "../comment/comment.model";
import { User } from "../user/user.model";
import { Draft } from "./draft.model";

export interface Post extends Draft {
    id: string;
    user: User;
    createdAt: Date;
    comments: PostComment[];
}