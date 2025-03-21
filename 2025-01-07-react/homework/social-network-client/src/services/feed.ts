import axios from "axios";
import Post from "../models/post/Post";

class Feed {
    async getFeed(): Promise<Post[]> {
        const response = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/feed`);
        return response.data;
    }
}

const feed = new Feed();
export default feed;