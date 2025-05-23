import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Gift from "./gift";

@Table({
    underscored: true
})
export default class TargetAudience extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @AllowNull(false)
    @Column(DataType.STRING(40))
    type: string;

    @HasMany(() => Gift)
    gifts: Gift[]
}