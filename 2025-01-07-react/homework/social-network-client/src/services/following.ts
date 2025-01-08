import axios from "axios";
import Follow from "../models/follow/Follow";

class Following {
    async getFollowing(): Promise<Follow[]> {
        const response = await axios.get<Follow[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/following`);
        return response.data;
    }
}

const following = new Following();
export default following;