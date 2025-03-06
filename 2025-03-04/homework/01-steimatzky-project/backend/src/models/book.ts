import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Genre from "./genre";

@Table({
    underscored: true
})
export default class Book extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    bookName: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    summary: string;

    @ForeignKey(() => Genre)
    @AllowNull(false)
    @Column(DataType.UUID)
    genreId: string;

    @AllowNull(false)
    @Column(DataType.DECIMAL(10, 2))
    bookPrice: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    stock: number;

    @BelongsTo(() => Genre)
    genre: Genre
}