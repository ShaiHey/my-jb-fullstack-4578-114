import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import FurnitureType from "./furniture-type";

@Table({
    underscored: true
})
export default class Furniture extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @ForeignKey(() => FurnitureType)
    @AllowNull(false)
    @Column(DataType.UUID)
    furnitureTypeId: string;

    @AllowNull(false)
    @Column
    dimensions: string;

    @AllowNull(false)
    @Column
    color: string;

    @AllowNull(false)
    @Column(DataType.DECIMAL(12, 2))
    price: number;

    @BelongsTo(() => FurnitureType)
    furnitureType: FurnitureType
}