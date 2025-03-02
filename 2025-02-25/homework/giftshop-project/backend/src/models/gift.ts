import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import TargetAudience from "./target-audience";

@Table({
    underscored: true
})
export default class Gift extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;
    
    @ForeignKey(() => TargetAudience)
    @AllowNull(false)
    @Column(DataType.UUID)
    targetAudienceId: string;

    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string;

    @AllowNull(false)
    @Column(DataType.DECIMAL(20, 2))
    price: number;

    @AllowNull(false)
    @Column(DataType.DECIMAL(20, 2))
    discount: number;

    @BelongsTo(() => TargetAudience)
    audience: TargetAudience
}