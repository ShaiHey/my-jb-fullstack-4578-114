import CommentDraft from "../models/comment/CommentDraft";
import Comment from "../models/comment/Comment";
import AuthAware from "./auth-aware/AuthAware";

class Comments extends AuthAware {
    async addComment(id: string, comment: CommentDraft): Promise<Comment> {
        const response = await this.axiosInstance.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${id}`, comment);
        return response.data;
    }
}

export default Comments;