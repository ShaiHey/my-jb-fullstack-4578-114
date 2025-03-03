import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Furniture from "./furniture";

@Table({
    underscored: true
})
export default class FurnitureType extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column
    name: string;

    @HasMany(() => Furniture)
    furnitures: Furniture[]
}