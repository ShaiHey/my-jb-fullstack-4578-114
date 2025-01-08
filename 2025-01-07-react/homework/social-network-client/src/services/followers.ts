import axios from "axios";
import Follow from "../models/follow/Follow";

class Followers {
    async getFollowers(): Promise<Follow[]> {
        const response = await axios.get<Follow[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/followers`);
        return response.data;
    }
}

const followers = new Followers();
export default followers;