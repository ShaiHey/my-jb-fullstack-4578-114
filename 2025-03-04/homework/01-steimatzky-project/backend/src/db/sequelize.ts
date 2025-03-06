import { Sequelize } from "sequelize-typescript";
import config from "config";
import Genre from "../models/genre";
import Book from "../models/book";

const logging = config.get<boolean>('sequelize.logging');

const sequelize = new Sequelize({
    models: [ Genre, Book ],
    logging: logging ? console.log : false,
    ...config.get('db')
})

export default sequelize;