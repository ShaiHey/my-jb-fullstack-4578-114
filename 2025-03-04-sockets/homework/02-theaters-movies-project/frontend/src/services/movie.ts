import axios from "axios";
import Movie from "../models/movie/Movie";
import Draft from "../models/movie/Draft";

class MovieService {
    async getMoviesPerCinema(cinemaId: string): Promise<Movie[]> {
        const response = await axios.get<Movie[]>(`${import.meta.env.VITE_REST_SERVER_URL}/movies/${cinemaId}`);
        return response.data;
    }

    async createMovie(draft: Draft): Promise<Movie> {
        const response = await axios.post<Movie>(`${import.meta.env.VITE_REST_SERVER_URL}/movies`, draft);
        return response.data;
    }

    async deleteMovie(movieId: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/movies/${movieId}`);
        return response.data;
    }
}

const movieService = new MovieService();
export default movieService;