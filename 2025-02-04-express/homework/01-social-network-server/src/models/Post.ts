import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    underscored: true
})
export default class Post extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column(DataType.UUID)
    user_id: string;


    @AllowNull(false)
    @Column
    title: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string;
}