import { Sequelize } from "sequelize-typescript";
import config from "config";

const logging = config.get<boolean>('sequelize.logging');

const sequelize = new Sequelize({
    // [ All models here ]
    models: [ /* User, Post, Comment, Follow */ ],
    logging: logging ? console.log : false,
    ...config.get('db')
})

export default sequelize;