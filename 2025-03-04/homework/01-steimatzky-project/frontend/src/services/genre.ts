import axios from "axios";
import Genre from "../models/genre/Genre";

class GenreService {
    async getAllGenres(): Promise<Genre[]> {
        const response = await axios.get<Genre[]>(`${import.meta.env.VITE_REST_SERVER_URL}/genres`);
        return response.data;
    }
}

const genreService = new GenreService();
export default genreService;