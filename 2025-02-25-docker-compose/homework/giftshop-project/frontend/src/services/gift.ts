import axios from "axios";
import Gift from "../models/gifts/Gift";
import GiftDraft from "../models/gifts/GiftDraft";

class GiftsService {
    async getGiftByTarget(targetId: string): Promise<Gift[]> {
        const response = await axios.get<Gift[]>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${targetId}`);
        return response.data;
    }

    async create(gift: GiftDraft): Promise<Gift> {
        const response = await axios.post<Gift>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts`, gift);
        return response.data;
    }

    async delete(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${id}`);
        return response.data;
    }
}

const giftService = new GiftsService();
export default giftService;