import { AllowNull, Column, DataType, Default, Index, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    underscored: true
})
export default class User extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    @Index({ unique: true })
    @AllowNull(false)
    @Column(DataType.STRING(40))
    username: string

    @AllowNull(false)
    @Column(DataType.STRING(64))
    password: string
}