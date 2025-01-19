import axios from "axios";
import User from "../models/user/User";

class Followers {
    async getFollowers(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/followers`);
        return response.data;
    }
}

const followers = new Followers();
export default followers;