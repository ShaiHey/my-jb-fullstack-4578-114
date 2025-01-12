import axios from "axios";
import User from "../models/user/User";

class Following {
    async getFollowing(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/following`);
        return response.data;
    }
}

const following = new Following();
export default following;