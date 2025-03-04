import { Sequelize } from "sequelize-typescript";
import config from "config";
import Furniture from "../models/furniture";
import FurnitureType from "../models/furniture-type";

const logging = config.get<boolean>('sequelize.logging');

const sequelize = new Sequelize({
    models: [ Furniture, FurnitureType ],
    logging: logging ? console.log : false,
    ...config.get('db')
})

export default sequelize;