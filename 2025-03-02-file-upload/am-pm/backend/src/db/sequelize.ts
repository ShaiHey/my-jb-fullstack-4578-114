import { Sequelize } from "sequelize-typescript";
import config from "config";
import Product from "../models/product";
import Category from "../models/category";

const logging = config.get<boolean>('sequelize.logging');

const sequelize = new Sequelize({
    models: [ Product, Category ],
    logging: logging ? console.log : false,
    ...config.get('db')
})

export default sequelize;