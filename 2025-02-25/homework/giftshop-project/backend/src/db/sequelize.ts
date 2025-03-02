import { Sequelize } from "sequelize-typescript";
import config from "config";
import TargetAudience from "../models/target-audience";
import Gift from "../models/gift";

const logging = config.get<boolean>('sequelize.logging');

const sequelize = new Sequelize({
    models: [ TargetAudience, Gift ],
    logging: logging ? console.log : false,
    ...config.get('db')
})

export default sequelize;