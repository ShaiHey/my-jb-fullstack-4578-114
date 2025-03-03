import FurnitureType from "../furniture-type/FurnitureType";
import Draft from "./Draft";

export default interface Furniture extends Draft {
    id: string
    furnitureType: FurnitureType
}