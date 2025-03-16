import axios from "axios";
import Cinema from "../models/cinema/Cinema";

class CinemaService {
    async getAllCinemas(): Promise<Cinema[]> {
        const response = await axios.get<Cinema[]>(`${import.meta.env.VITE_REST_SERVER_URL}/cinemas`);
        return response.data;
    }
}

const cinemaService = new CinemaService();
export default cinemaService;