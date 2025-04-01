import { User } from "../user/user.model";
import { PostCommentDraft } from "./draft.model";

export interface PostComment extends PostCommentDraft {
    id: string;
    postId: string;
    createdAt: Date;
    user: User;
}