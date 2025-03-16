import Genre from "../genre/Genre";
import Draft from "./Draft";

export default interface Book extends Draft {
    id: string;
    genre: Genre;
}