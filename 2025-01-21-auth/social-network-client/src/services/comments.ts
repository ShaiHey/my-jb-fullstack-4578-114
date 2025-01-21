import axios from "axios";
import CommentDraft from "../models/comment/CommentDraft";
import Comment from "../models/comment/Comment";

class Comments {
    async addComment(id: string, comment: CommentDraft): Promise<Comment> {
        const response = await axios.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${id}`, comment);
        return response.data;
    }
}

const comments = new Comments();
export default comments;