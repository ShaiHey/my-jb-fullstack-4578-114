import Comment from "../comment/Comment";
import User from "../user/User";
import PostDraft from "./PostDraft";

export default interface Post extends PostDraft {
    id: string;
    userId: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: string;
    comments: Comment[];
    user: User
}