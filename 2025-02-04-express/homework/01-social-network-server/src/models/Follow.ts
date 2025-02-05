import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    underscored: true
})
export default class Follow extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    follower_id: string;

    @PrimaryKey
    @Column(DataType.UUID)
    folowee_id: string;
}