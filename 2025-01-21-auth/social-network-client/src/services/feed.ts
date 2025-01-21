import Post from "../models/post/Post";
import AuthAware from "./auth-aware/AuthAware";

class Feed extends AuthAware{
    async getFeed(): Promise<Post[]> {
        const response = await this.axiosInstance.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/feed`);
        return response.data;
    }
}

export default Feed;