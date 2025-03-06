import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Movie from "./movie";

@Table({
    underscored: true
})
export default class Cinema extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column
    name: string;

    @HasMany(() => Movie)
    movies: Movie[]
}