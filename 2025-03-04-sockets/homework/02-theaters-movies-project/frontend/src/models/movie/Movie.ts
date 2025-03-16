import Cinema from "../cinema/Cinema";
import Draft from "./Draft";

export default interface Movie extends Draft {
    id: string;
    cinema: Cinema
}