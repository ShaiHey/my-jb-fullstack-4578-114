import axios from "axios";
import Draft from "../models/furniture/Draft";
import Furniture from "../models/furniture/Furniture";

class FurnitureService {
    async getAllFurniture(): Promise<Furniture[]> {
        const response = await axios.get<Furniture[]>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture`);
        return response.data;
    }

    async create(draft: Draft): Promise<Furniture> {
        const response = await axios.post<Furniture>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture`, draft);
        return response.data;
    }
}

const furnitureService = new FurnitureService();
export default furnitureService;