import axios from "axios";
import FurnitureType from "../models/furniture-type/FurnitureType";

class FurnitureTypeService {
    async getAllFurnitureType(): Promise<FurnitureType[]> {
        const response = await axios.get<FurnitureType[]>(`${import.meta.env.VITE_REST_SERVER_URL}/types`);
        return response.data;
    }
}

const furnitureTypeService = new FurnitureTypeService();
export default furnitureTypeService;