import { Sequelize } from "sequelize-typescript";
import config from "config";
import Cinema from "../models/cinema";
import Movie from "../models/movie";

const logging = config.get<boolean>('sequelize.logging');

const sequelize = new Sequelize({
    models: [ Cinema, Movie ],
    logging: logging ? console.log : false,
    ...config.get('db')
})

export default sequelize;